import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Joke.css';
import {Card} from 'react-bootstrap'
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
                
                <Card>
                    <Card.Body>
                    <h2 id="joke">Try refreshing the page if you can't find the joke. Note: It is not a joke</h2><br /><hr />
                       <button className="btn btn-info nextBtn" onClick={this.handleGet}>Don't click here for next joke 😑</button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Joke;