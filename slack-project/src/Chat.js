import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { doc, onSnapshot, collection, getDocs } from "firebase/firestore";
import db from "./firebase";
import Message from "./Message";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      // Fetch documents in the main collection 'rooms'
      const roomRef = doc(db, "rooms", roomId);
      onSnapshot(roomRef, (snapshot) => {
        if (snapshot.exists()) {
          setRoomDetails(snapshot.data());

          // Fetch documents in the subcollection 'messages'
          getDocs(collection(db, `rooms/${snapshot.id}/messages`)).then(
            (response) => {
              const messages = [];
              response.forEach((doc) => {
                messages.push(doc.data());
              });
              setRoomMessages(messages);
            }
          );
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [roomId]);

  console.log("DetailsRoomscollect", roomDetails);
  console.log("DetailsMsgsubcollect ", roomMessages);

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
        {roomMessages.map(({ message, timestamp, user, userimage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userimage={userimage}
          />
        ))}
      </div>
    </div>
  );
}
export default Chat;
