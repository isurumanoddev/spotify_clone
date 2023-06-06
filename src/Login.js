import React from 'react';
import "./Login.css"
import {loginUrl} from "./Spotify"
import {Button} from "@mui/material";


function Login() {
    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt=""
                 className="login__logo"/>
            {/*<div className="login__buttons">*/}
            {/*    <button className="login__google">*/}
            {/*        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />*/}
            {/*        Continue With Google</button>*/}
            {/*    <button className="login__google">*/}
            {/*         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />*/}
            {/*        Continue With Facebook</button>*/}

            {/*</div>*/}
            <Button href={loginUrl} className="login__button">
                LOGIN WITH SPOTIFY</Button>
        </div>
    );
}

export default Login;

