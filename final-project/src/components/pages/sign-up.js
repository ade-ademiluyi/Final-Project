import React, { Component } from 'react'
import '../../App.css'
import Cards from '../Cards'
import './sign-up.css'

function Home() {
    return (
        <>
        <div>
            <h1>TIC TAC TOE</h1>
            <img src="gallery_images/tic-tac-toe.jpg" alt = "tic-tac-toe board"/>
            <ul id="project_body">
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
                <img src="gallery_images/threads.jpg" alt = "picture of a thread"/>
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
                
                <h1>CONNECT FOUR</h1>
                <img src="gallery_images/connect_four.jpg" alt = "a picture of connect four board"/>
                <li>
                    Extended Tic Tac Toe game in replit that allows
                    up to 5 players and allow users to choose the
                    dimension of the board they would like to play
                    with using different alphabets.
                </li>
                <li>
                    Currently extending the capacity of the program
                    to allow users choose to play connect
                    four.
                </li>  
            </ul>
    </div>
        </>
    );
}

export default Home;