import React from 'react';
import "./Header.css"
import {Avatar, IconButton} from "@mui/material";
import {Search} from "@mui/icons-material";


function Header({spotify}) {
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

                        <Avatar/>
                    </IconButton>



            </div>


        </div>
    );
}


export default Header;
