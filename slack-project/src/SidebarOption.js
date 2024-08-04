import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
  return (
    <div className='sidebarOption'>
        {/* Only rendering icon if an icon is passed in as prompt */}
        {/* If the Icon prop is provided and is truthy, it renders the Icon component */}
      {Icon ? <>
        <Icon className='sidebarOption__icon' />
        <h3>{title}</h3>
      </>
        :
        <>
          {/* If no Icon is provided, render a span with a hash symbol */}
          <span className="SidebarOption__hash">#</span>
          <h3 className='SidebarOption__channel'>
            <span className="sidebarOption__title">{title}</span>
          </h3>
        </>
      }
    </div>
  )
}
export default SidebarOption