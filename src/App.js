import './App.css';
import Login from "./Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useStateValue} from "./StateProvider";


const spotifyAPI = new SpotifyWebApi()


function App() {


    const [{user, token,spotify}, dispatch] = useStateValue()


       console.log("spotify ",spotify);


    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token
        window.location.hash = ""

        if (_token) {
            spotifyAPI.setAccessToken(_token);
            dispatch({
                type: "SET_Token",
                token: _token,
            })
            dispatch({
                type: "SET_SPOTIFY",
                spotify: spotifyAPI,
            });


            spotifyAPI.getMe()
                .then((user) => {
                    dispatch({
                        type: "SET_USER",
                        user: user
                    })

                });
            spotifyAPI.getUserPlaylists()
                .then((playlists) => {
                    dispatch({
                        type: "SET_PLAYLIST",
                        playlists: playlists,

                    })

                })
            spotifyAPI.getPlaylist("37i9dQZF1DXdxcBWuJkbcy")
                .then((playlist) => {

                    dispatch({
                        type: "SET_DISCOVER_WEEKLY",
                        discover_weekly: playlist,

                    })

                })
            spotifyAPI.getMyTopArtists().then((response) =>
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })
            )


        }

    }, [])


    return (
        <div className="app">

            {token ? <Player spotify={spotify}/> :

                <Login/>

            }


        </div>
    );
}

export default App;
