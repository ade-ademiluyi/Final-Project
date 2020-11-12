import React, { Component } from 'react'
import '../../App.css'
import Cards from '../Cards'
import './sign-up.css'
import img1 from './tictactoe.jpeg'
import img2 from './threads.jpeg'

function Home() {
    return (
        <>
        <div>
            <h1>TIC TAC TOE</h1>
            <ul id="project_body">
                <img src={img1} alt = "tic-tac-toe board"/>
                <li>
                Developed a Tic Tac Toe game in replit that
                allows two users to play against each other and
                stop when a user wins.
                </li>
                <li>
                    Modified the Tic Tac Toe game to enable the
                    user to play against the computer.
                </li>
                
                <h1>CUSTOM THREADS</h1>
                <img src={img2} alt = "picture of a thread"/>
                <li>
                    Developed an application in python using processing 
                    py that allows user to customize shirts
                    of different sizes and colors.
                </li>
                <li>
                    Modified the application in processing py and
                    included a function that allows user to include
                    their favorite brands.
                </li>
            </ul>
    </div>
        </>
    );
}

export default Home;