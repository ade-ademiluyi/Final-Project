import React, {useState} from 'react';
import './Fetch.css';

function Fetch() {
    const [place, setPlace] = useState("");

    const url = "https://api.jsonbin.io/b/5fad3cd843fc1e2e1b413b2f/2";

    function fetchData (e) {
        e.preventDefault();
        
        fetch(url)
         .then(function(response) {
             return response.json();
         })
         .then(function(data) {
             let html = '';
             const filterdData = data.filter((places) => (places.Place === place))[0];
             if (!filterdData)
             {
                html += `
                <p>Please enter a name on the cards! Thanks</p>
             `
             }
             else {
             html += `
                <p>Destination: ${filterdData.Place}</p>
                <br>
                <ul>
                <li><p>Ticket Price: ${filterdData.Ticket}</p></li>
                <br>
                <li><p>Destination Info: ${filterdData.info}</p></li>
                </ul>
                <br>
             `
            }
             document.getElementById('load-data').innerHTML = html;
        })
    }

    return (
        <div>
            <div>
                <form onSubmit= {fetchData}> 
                    <input 
                        value = {place}
                        text = "text"
                        name = "place"
                        placeholder = "enter a place here!"
                        onChange = {(e) => setPlace(e.target.value)}
                    ></input>
                    <button type = "submit" className="fetch" >Search</button>
                </form>    
            </div>
            <div id='load-data'>
            </div>
        </div>
    )
}

export default Fetch