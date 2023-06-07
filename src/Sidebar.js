import React from 'react';
import "./Sidebar.css"
import {Home, Search, LibraryMusic, PlaylistAdd, Favorite, ExpandMore} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import {useStateValue} from "./StateProvider";


function Sidebar() {
    const [{playlists}, dispatch] = useStateValue()
    console.log("playlists : ",playlists?.items)
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
            {playlists?.items?.map(playlist =>(

                <SidebarOption title={playlist.name}/>
                )
            )}


        </div>
    );
}

export default Sidebar;
