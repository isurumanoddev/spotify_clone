import React from "react";


import "./Footer.css"
import {
    FeaturedPlayList,
    PlayArrow, PlaylistAddCheck,
    Repeat,
    Shuffle,
    SkipNext,
    SkipPrevious,
    VolumeDown,
    VolumeUp
} from "@mui/icons-material";
import {Grid, IconButton, Slider} from "@mui/material";


function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                {/* Left content */}
                <img className="footer__left-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo"/>
                <div className="footer__left-song-info">
                    <p className="footer__left-song-title">Song Title</p>
                    <p className="footer__left-artist-name">Artist Name</p>
                </div>
            </div>
            <div className="footer__center">


                <IconButton className="footer__center-control-button">
                    <Shuffle/>
                </IconButton>
                <IconButton className="footer__center-control-button">
                    <SkipPrevious/>
                </IconButton>
                <IconButton className="footer__center-control-button-large">
                    <PlayArrow fontSize="large"/>
                </IconButton>
                <IconButton className="footer__center-control-button">
                    <SkipNext/>
                </IconButton>
                <IconButton className="footer__center-control-button">
                    <Repeat/>
                </IconButton>


            </div>
            <div className="footer__right">


                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistAddCheck/>
                    </Grid>
                    <Grid item>
                        <VolumeDown/>
                    </Grid>
                    <Grid item xs>
                        <Slider className="footer__right__slider"/>
                    </Grid>
                    <Grid item >
                        <VolumeUp/>
                    </Grid>
                </Grid>


            </div>
        </div>
    );
}

export default Footer;


