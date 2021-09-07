import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Joke.css';
const oneLinerJoke = require('one-liner-joke');



class Joke extends React.Component{
    componentDidMount() {
        window.addEventListener('load', this.handleGet);
     }
    
     componentWillUnmount() { 
       window.removeEventListener('load', this.handleGet)  
     }
    handleGet(){
        const getRandomJoke = oneLinerJoke.getRandomJoke();
        document.getElementById('joke').innerText = getRandomJoke.body;
    }
    render(){
        return(
            <div className="container">
                {/* <input type="text" className="form-control" id="joke" disabled/>                 */}
                <h2 id="joke">Try refreshing the page if you can't find the joke. Note: It is not a joke</h2>
                <button className="btn btn-secondary" onClick={this.handleGet}>Get Joke</button>
            </div>
        )
    }
}

export default Joke;