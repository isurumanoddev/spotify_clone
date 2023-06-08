import React, {useEffect, useState} from 'react';
import "./Body.css"
import Header from "./Header";
import {useStateValue} from "./StateProvider";
import {Favorite, MoreHoriz, PlayCircleFilled} from "@mui/icons-material";
import SongRow from "./SongRow";


function Body({spotify}) {


    const [{discover_weekly}, dispatch] = useStateValue()
    const [darkNav, setDarkNav] = useState(true)

    console.log("discover_weekly?.tracks.items : ",discover_weekly?.tracks.items[0].track)

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                setDarkNav(true)
            } else setDarkNav(false);
        })
    }, []);

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:37i9dQZF1DXdxcBWuJkbcy`,
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    return (<div className={"body"}>
        <Header spotify={spotify} darkNav={darkNav}/>
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
            {discover_weekly?.tracks.items.map(item => (
                <SongRow playSong={playSong} track={item.track}/>

            ))}

        </div>
    </div>);
}

export default Body;