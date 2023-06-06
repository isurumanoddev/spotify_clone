import React from 'react';
import "./Sidebar.css"
import {Home,Search,LibraryMusic,PlaylistAdd,Favorite} from "@mui/icons-material";

function Sidebar() {
    return (
     <div className="sidebar">
      <div className="logo">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo" />
      </div>
      <ul className="menu-items">
        <li className="menu-item "><Home /> Home</li>
        <li className="menu-item"><Search /> Search</li>
        <li className="menu-item"><LibraryMusic /> Your Library</li>
        <li className="menu-item"><PlaylistAdd /> Create Playlist</li>
        <li className="menu-item"><Favorite /> Liked Songs</li>
      </ul>
    </div>
    );
}

export default Sidebar;
