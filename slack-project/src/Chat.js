import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { doc, onSnapshot, collection } from "firebase/firestore";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  console.log("CheckingroomDetails", roomDetails);

  // When you switch channel it should fetch room details from the db.
  useEffect(() => {
    if (roomId) {
      // Fetch documents with real-time listener in the main collection 'rooms'
      const roomRef = doc(db, "rooms", roomId);
      const unsubscribeRoom = onSnapshot(roomRef, (snapshot) => {
        if (snapshot.exists()) {
          setRoomDetails(snapshot.data());

          // Fetch documents with real-time listener in the subcollection 'messages'
          const messagesRef = collection(db, `rooms/${snapshot.id}/messages`);
          const unsubscribeMessages = onSnapshot(messagesRef, (snapshot) => {
            const messages = [];
            snapshot.forEach((doc) => {
              messages.push(doc.data());
            });
            setRoomMessages(messages);
          });

          // Cleanup listener for messages when component unmounts
          return () => unsubscribeMessages();
        } else {
          console.log("No such document!");
        }
      });
      // Cleanup listener for room details when component unmounts
      return () => unsubscribeRoom();
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            {/* Uses optional chaining to safely access roomDetails.name
            without risking a runtime error if roomDetails is null or undefined. */}
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>

        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({ message, timestanp, user, userimage }) => (
          <Message
            message={message}
            timestanp={timestanp}
            user={user}
            userimage={userimage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}
export default Chat;
