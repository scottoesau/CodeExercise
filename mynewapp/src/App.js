import React, { Component } from "react";
import "./App.css";
import ItemsList from './ItemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars Character List Filtering </h1>
        <hr/>
        <ItemsList />    
        <article className="main"></article>
        <h4>Some Characters:</h4>
        <p>Mas Amedda, Poe Dameron, Anakin Skywalker, Luke Skywalker, Shmi Skywalker</p><p> Lando Calrissian, Padmé Amidala, Raymus Antilles, Wedge Antilles, Chewbacca,Boba Fett, Jango Fett  </p>
      </div>
      
    );
  }
}

export default App;
