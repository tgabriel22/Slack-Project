import React, { useState } from "react";
import "./ChatInput.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  console.log("userChecking:", user);

  const sendMessage = async (e) => {
    e.preventDefault(); //so it doesn't refrech the page

    if (channelId && user) {
      // Ensure user exists
      try {
        await addDoc(collection(db, `rooms/${channelId}/messages`), {
          message: input,
          timestanp: serverTimestamp(),
          user: user.displayName || "Anonymous", // Fallback in case user.displayName is undefined
          userimage: user.photoURL || "", // Fallback in case user.photoURL is undefined
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
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} //map everytime the user type something
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
