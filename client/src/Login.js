import React from "react";
import { Link } from 'react-router-dom';

import './index.css';
import LoginButton from './components/buttons/spotifyLogin.js';
import Logo from './images/logo.svg'
const BackgroundImage = '../public/spotifylogo.png';


const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=58cb403bae2240ff8af16de248d5020c&response_type=code&redirect_uri=http://localhost:3000/dashboard&response_type=token&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative%20user-library-read%20user-library-modify%20user-top-read%20user-read-recently-played%20user-follow-read%20user-follow-modify';

export default function Login() {
    return (
        <div className="flex-col  bg-black  w-full justify-center items-center bg-gradient-to-b from-green-800 via-green-800 to-black ">
         <nav className="flex w-screen justify-between">
            <div className="flex items-center">
                <img src={Logo} alt="Spotify Logo" className="my-auto w-32 " />
            </div>
            <div className="flex items-center">
                <Link to="/dashboard/about" className="inline-flex items-center p-3 text-white hover:text-gray-300">About</Link>
                <Link to="/dashboard/Contact" className="inline-flex items-center text-white hover:text-gray-300">Contact</Link>
                <div className="inline-flex m-4 items-center border-solid rounded-full bg-black">
              
                </div>
            </div>
        </nav>
        <div className="b border-cyan-50 w-screen flex flex-col justify-center items-center mt-20">
            <h1 className="text-white font-extrabold text-5xl text-center">Welcome to our Spotify playlist generator!</h1> <br></br>
             <p className="text-white text-center text-xl mt-1  p-4  ">Our advanced algorithm combines the power of OpenAI and Spotify's vast music library to create personalized playlists tailored to your mood.
             Whether you're feeling upbeat, relaxed, or somewhere in between, our tool will curate a playlist that matches your vibe. 
             Simply select your desired mood and let our technology do the rest. 
             Our playlist generator is perfect for discovering new music and enhancing your listening experience. 
             Give it a try today and let the power of AI elevate your music experience to the next level!</p>
        </div>
        <br></br>
        <div className="flex items-center justify-center">
           <LoginButton url={AUTH_URL}/>
        </div>
        </div>
    )
}