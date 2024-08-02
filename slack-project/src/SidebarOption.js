import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
  return (
    <div className='sidebarOption'>

        {/* Only rendering icon if an icon is passed in as prompt */}
        {/* If the Icon prop is provided and is truthy, it renders the Icon component */}
        {Icon && <Icon className='sidebarOption__icon'/>}


        {/* if you pass an icon reder ou the icon and the titel */}
        {/* If you didn't pass an icon generate an # and the title. Which is going to be a channel */}
        {Icon ?<h3>{title}</h3>:
        <h3 className='SidebarOption__channel'><span className="sidebarOption__hash">#{title}</span></h3>}
    </div>
  )
}

export default SidebarOption