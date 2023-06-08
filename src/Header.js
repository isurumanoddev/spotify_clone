import React, {useEffect, useState} from 'react';
import "./Header.css"
import {Avatar, IconButton} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useStateValue} from "./StateProvider";


function Header({spotify,darkNav}) {




    const [{user}, dispatch] = useStateValue()

    return (
        <div className={`header ${darkNav && "headerDark" }`}>
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
