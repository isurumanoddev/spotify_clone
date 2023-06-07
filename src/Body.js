import React from 'react';
import "./Body.css"
import Header from "./Header";
import {useStateValue} from "./StateProvider";
import {Favorite, MoreHoriz, PlayCircleFilled} from "@mui/icons-material";


function Body({spotify}) {

    const [{discover_weekly}, dispatch] = useStateValue()



    return (
        <div className={"body"}>
            <Header/>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url}
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
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="PlayCircleFilled"/>
                    <div>
                          <Favorite className="other"/>
                    <MoreHoriz className="other"/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Body;