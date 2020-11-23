import React, {useState} from 'react';
import './Fetch.css';

function Fetch() {
    const url = "https://api.jsonbin.io/b/5fad3cd843fc1e2e1b413b2f/2";

    function fetchData () {
        fetch(url)
         .then(function(response) {
             return response.json();
         })
         .then(function(data) {
             let html = '';
             data.forEach(function(places) {
                 html += `
                 <p>Destination: ${places.Place}</p>
                 <br>
                 <ul>
                    <li><p>Ticket Price: ${places.Ticket}</p></li>
                    <br>
                    <li><p>Destination Info: ${places.info}</p></li>
                </ul>
                <br>
             `;
             });
             document.getElementById('load-data').innerHTML = html;
         })
    }

    return (
        <div>
            <div>
                <button className="fetch" onClick= {fetchData}>Get info on these places!</button>
            </div>
            <div id='load-data'>
            </div>
        </div>
    )
}

export default Fetch
