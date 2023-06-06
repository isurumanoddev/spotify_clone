import './App.css';
import Login from "./Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";


const spotifyApi = new SpotifyWebApi()


function App() {
    const [token,setToken] =useState(null)

    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token
        window.location.hash = ""

        if (_token) {
            setToken(_token)
            spotifyApi.setAccessToken(_token);
            spotifyApi.getMe()
                .then((user) => {
                    console.log("user : ", user)
                })


        }

    },[])
    console.log("token  : ",token)

    return (
        <div className="app">

            {token ? <h1>Music Player</h1> :

                <Login/>

            }

        </div>
    );
}

export default App;
