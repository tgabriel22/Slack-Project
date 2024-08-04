// Anytime importing something from API or datadase
import React, { useEffect, useState } from 'react'
import {collection, onSnapshot} from "firebase/firestore"
import db from "./firebase"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import "./Sidebar.css"
import './SidebarOption.css';




function Sidebar() {
    const [channels, SetChannels] = useState([]);
    // `channels` is the state variable.
    // `SetChannels` is the function to update the state.
    
    useEffect(() => {
      // Fetching Data from Firestore
      const unsubscribe = onSnapshot(collection(db, "rooms"), (snapshot) => {
        // Updating State
        SetChannels(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
        // Returns a cleanup function
      return () => unsubscribe();
    }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <div className="sidebar__info">
                <h2>TG/Dev</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    Thierry Gabriel
                </h3>
            </div>
            <CreateIcon/>
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
        <SidebarOption Icon={DraftsIcon} title="Saved items"/>
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
        <SidebarOption Icon={AppsIcon} title="Apps"/>
        <SidebarOption Icon={FileCopyIcon} title="File browser"/>
        <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
        <hr/>
        <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
        <hr/>
        <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
        {/* Connect to dB and list all the channels */}
        {/* <SidebarOption... /> */}
        {/* If channels is not null or undefined, then map over it. */}
        {channels?.map((channel,id) =>(
            <SidebarOption key={id} title={channel.name} id={id}/> // Render a SidebarOption component with the key, title, and id props set.
        ))}
    </div>
  )
}

export default Sidebar