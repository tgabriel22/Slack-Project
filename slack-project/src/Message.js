import React from "react";
import "./Message.css";

function Message({ message, timestanp, user, userimage }) {
  return (
    <div className="message">
      <img src={userimage} alt="" />
      <div className="message__info">
        <h4>
          {user}{" "}
          {timestanp
            ? new Date(timestanp.toDate()).toUTCString()
            : "No timestamp available"}
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
