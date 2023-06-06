import './App.css';
import Login from "./Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";


const spotifyApi = new SpotifyWebApi()


function App() {
    const [token,setToken] =useState(null)
    const [user,setUser] =useState("")

    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token
        window.location.hash = ""

        if (_token) {
            setToken(_token)
            spotifyApi.setAccessToken(_token);
            spotifyApi.getMe()
                .then((user) => {

                    setUser(user.display_name)
                })


        }

    },[])
    console.log("token  : ",token)

    return (
        <div className="app">

            {token ? <Player image={user}/> :

                <Login/>

            }

        </div>
    );
}

export default App;
