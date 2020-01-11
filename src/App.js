import React, { Component } from "react";
import "./styles.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Bello" id="1" time="3: 30 PM" />
        <Person name="Max" id="2" time="4: 30 PM" />
        <Person name="Manu" id="3" time="5: 20 PM" />
      </div>
    );
  }
}

export default App;
