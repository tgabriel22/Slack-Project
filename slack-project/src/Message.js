import React from "react";
import "./Message.css";

function Message({ message, timestanp, user, userimage }) {
  return (
    <div className="message">
      <img src={userimage} alt="" />
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timestanp">
            {timestanp
              ? new Date(timestanp.toDate()).toUTCString()
              : "No timestanp available"}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
