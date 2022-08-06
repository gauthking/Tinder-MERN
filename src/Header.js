import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <Link to="/userinfo">
                <IconButton>
                    <PersonIcon fontSize='large' className='header__icon' />
                </IconButton>
            </Link>

            <Link to="/home">
                <img src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="" className='header__logo' />
            </Link>

            <IconButton>
                <ChatBubbleIcon />
            </IconButton>
        </div>
    )
}

export default Header