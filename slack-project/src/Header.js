import React from 'react';
import './Header.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
          {/* Avatar for logged in user */}
          <Avatar className='header__avatar' alt='Gabriel Thierry' src=''/>
          {/* Time icon */}
          <AccessTimeIcon/> 
        </div>
        <div className='header__search'>
          {/* Search icon */}
          <SearchIcon/>
          {/* input */}
          <input placeholder='Search TG/Dev' />
        </div>
        <div className='header__right'>
          {/* help icon */}
          <HelpOutlineIcon/>
        </div>
    </div>

  )
}

export default Header