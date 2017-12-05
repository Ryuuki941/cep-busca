import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SNA from './components/SearchNAdd/SearchNAdd'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <SNA/>
      </div>
    );
  }
}

export default App;
