import React from 'react';
import "./Player.css"
import {useStateValue} from "./StateProvider";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({spotify}) {
    const [{user},dispatch ] = useStateValue()


    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <div className="player__footer">
                <Footer spotify={spotify}/>
            </div>

        </div>
    );
}

export default Player;

