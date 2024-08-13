import React, { useState } from "react";
import "./ChatInput.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (channelId && user) {
      try {
        await addDoc(collection(db, `rooms/${channelId}/messages`), {
          message: input,
          timestamp: serverTimestamp(),
          user: user.displayName || "Anonymous",
          userimage: user.photoURL || "",
        });

        setInput(""); // Clear the input field after sending the message
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      console.error("User is undefined or channelId is missing.");
    }
  };

  return (
    <div className="chatInput">
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <div className="sendButton">
          <SendIcon onClick={sendMessage} />
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
