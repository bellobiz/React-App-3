import React, { Component } from "react";
import "./styles.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Bello", id: "1", time: "3: 30 PM" },
      { name: "Max", id: "2", time: "4: 30 PM" },
      { name: "Manu", id: "3", time: "5: 20 PM" }
    ]
  };

  render() {
    return (
      <div className="App">
        <Person
          name={this.state.persons[0].name}
          id={this.state.persons[0].id}
          time={this.state.persons[0].time}
        />
        <Person
          name={this.state.person[1].name}
          id={this.state.persons[1].id}
          time={this.state.persons[1].time}
        />
        <Person
          name={this.state.persons[2].name}
          id={this.state.persons[2].id}
          time={this.state.persons[2].time}
        />
      </div>
    );
  }
}

export default App;
