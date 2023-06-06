import './App.css';
import Login from "./Login";
import {useEffect, useState} from "react";
import {getTokenFromUrl} from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useStateValue} from "./StateProvider";


const spotifyApi = new SpotifyWebApi()


function App() {

    const [{user}, dispatch] = useStateValue()

    const [token, setToken] = useState(null)

    console.log("user : ", user)


    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token
        window.location.hash = ""

        if (_token) {
            setToken(_token)
            spotifyApi.setAccessToken(_token);
            spotifyApi.getMe()
                .then((user) => {
                    dispatch({
                        type: "SET_USER",
                        user: user
                    })

                })


        }

    }, [])


    return (
        <div className="app">

            {token ? <Player/> :

                <Login/>

            }

        </div>
    );
}

export default App;
