import React from 'react';
import "./Header.css"
import {Avatar, IconButton} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useStateValue} from "./StateProvider";


function Header({spotify}) {
    const [{user},dispatch] = useStateValue()
    console.log("user ❤️❤️❤️",user?.images[0]?.url)
    return (
        <div className="header">
            <div className="header__left">

                <Search/>

                <input
                    type="text"
                    className="header__searchInput"
                    placeholder="Search for artists, songs, or albums"
                />


            </div>
            <div className="header__right">
                    <IconButton>

                        <Avatar src={user?.images[0]?.url}/>
                    </IconButton>



            </div>


        </div>
    );
}


export default Header;
