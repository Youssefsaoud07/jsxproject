import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Comp from './Components/Comp';
import ReactPlayer from 'react-player'

class App extends Component {
    render() {
        return(
        <div className="App">

            <Comp />
                <ReactPlayer url='https://youtu.be/wR9-qhoRfwE' />





        </div>
  );
    }
}

export default App;
