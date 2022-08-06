import React from 'react';
import "./NavigateButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';


function NavigateButtons() {
    return (
        <div className='navigatebuttons'>
            <IconButton className='navigatButtons__repeat'>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='navigatButtons__close'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='navigatButtons__star'>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='navigatButtons__right'>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='navigatButtons__lightning'>
                <FlashOnIcon fontSize='large' />
            </IconButton>

        </div>
    )
}

export default NavigateButtons