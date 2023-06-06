import React from 'react';
import "./Player.css"
import {useStateValue} from "./StateProvider";

function Player() {
    const [{user},dispatch ] = useStateValue()


    return (
        <div>

           <h2>Hello  , Welcome to spotify</h2>
        </div>
    );
}

export default Player;

