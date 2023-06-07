import React from "react";


import "./Footer.css"
import {PlayArrow, Repeat, Shuffle, SkipNext, SkipPrevious} from "@mui/icons-material";
import {IconButton} from "@mui/material";


function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        {/* Left content */}
        <img className="footer__left-logo" src="" alt="Spotify Logo" />
        <div className="footer__left-song-info">
          <p className="footer__left-song-title">Song Title</p>
          <p className="footer__left-artist-name">Artist Name</p>
        </div>
      </div>
      <div className="footer__center">
        {/* Center content */}
        <div className="footer__center-player-controls">
          <IconButton className="footer__center-control-button">
            <Shuffle  />
          </IconButton>
          <IconButton className="footer__center-control-button">
            <SkipPrevious  />
          </IconButton>
          <IconButton  className="footer__center-control-button-large">
            <PlayArrow fontSize="large"  />
          </IconButton>
          <IconButton className="footer__center-control-button">
            <SkipNext  />
          </IconButton>
          <IconButton className="footer__center-control-button">
          <Repeat/>
        </IconButton>

        </div>
        <div className="footer__center-progress-bar">
          <div className="footer__center-progress-bar__progress"></div>
        </div>
      </div>
      <div className="footer__right">
        {/* Right content */}
        <div className="footer__right-volume-control">
          <button className="footer__right-volume-button">

          </button>
          <div className="footer__right-volume-slider">
            <div className="footer__right-volume-slider__progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;


