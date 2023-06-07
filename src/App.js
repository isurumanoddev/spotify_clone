import './App.css';
import Login from "./Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useStateValue} from "./StateProvider";


const spotifyApi = new SpotifyWebApi()


function App() {


    const [{user,token}, dispatch] = useStateValue()


    console.log("💖",user)




    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token
        window.location.hash = ""

        if (_token) {
            dispatch({
                type:"SET_Token",
                token:_token,
            })


            spotifyApi.setAccessToken(_token);

            spotifyApi.getMe()
                .then((user) => {
                    dispatch({
                        type: "SET_USER",
                        user: user
                    })

                });
            spotifyApi.getUserPlaylists()
                .then((playlists) => {
                    dispatch({
                        type:"SET_PLAYLIST",
                        playlists:playlists,

                    })

                })




        }

    }, [])


    return (
        <div className="app">

            {token ? <Player spotify={spotifyApi}/> :

                <Login/>

            }


        </div>
    );
}

export default App;
