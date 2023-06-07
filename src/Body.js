import React from 'react';
import "./Body.css"
import Header from "./Header";
import {useStateValue} from "./StateProvider";


function Body({spotify}) {
    
    const [{discover_weekly},dispatch] = useStateValue()
    console.log("discover_weekly ",discover_weekly?.description)



    return (
        <div className={"body"}>
            <Header/>
            <div className="body__info">
                <img src="https://i.scdn.co/image/ab67706c0000da843b89f1e2ea2b75604a584ddf"
                     alt=""/>
                <div className="body__infoText">
                    <p className="body__infoText__1">Playlist</p>
                    <h1>Motivation Mix</h1>
                    <p className="body__infoText__1">{discover_weekly?.description}</p>

                </div>
            </div>
            <div className="body__playlist">
                <div className="body__playlist__music">
                    <img src="" alt="" className="body__playlist__music__image"/>
                    <div className="body__playlist__music__info"></div>
                </div>

            </div>
        </div>
    );
}

export default Body;