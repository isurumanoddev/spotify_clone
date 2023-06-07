import React from 'react';
import "./Sidebar.css"
import {Home, Search, LibraryMusic, PlaylistAdd, Favorite, ExpandMore} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                     alt="Spotify Logo"/>
            </div>
            <ul className="menu-items">
                <SidebarOption Icon={Home} title={"Home"}/>
                <SidebarOption Icon={Search} title={"Search"}/>
                <SidebarOption Icon={LibraryMusic} title={"Library"}/>
            </ul>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            <SidebarOption  title={"Home"}/>
            <SidebarOption  title={"Home"}/>
            <SidebarOption  title={"Home"}/>
            <SidebarOption  title={"Home"}/>

        </div>
    );
}

export default Sidebar;
