import React from "react";
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`/room/${id}`);
    } else {
      navigate(`/${title}`);
    }
  };

  // Add channels to the sidebaroption/Add data to the db
  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      try {
        await addDoc(collection(db, "rooms"), {
          name: channelName,
        });
        console.log("Channel added successfully");
      } catch (error) {
        console.error("Error adding channel: ", error);
      }
    }
  };

  return (
    // If you click this div and you have that addChannelOption, fire off the addChannel function
    // Otherwise fire off selectChannel option
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* Only rendering icon if an icon is passed in as prompt */}
      {/* If the Icon prop is provided and is truthy, it renders the Icon component */}
      {Icon ? (
        <>
          <Icon className="sidebarOption__icon" />
          <h3>{title}</h3>
        </>
      ) : (
        <>
          {/* If no Icon is provided, render a span with a hash symbol */}
          <span className="SidebarOption__hash">#</span>
          <h3 className="SidebarOption__channel">
            <span className="sidebarOption__title">{title}</span>
          </h3>
        </>
      )}
    </div>
  );
}
export default SidebarOption;
