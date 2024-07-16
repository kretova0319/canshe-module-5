import { Component } from "react";
import "./App.css";
import Quotes from "./Quotes";
import { Fox } from "./Fox";
import { Dogs } from "./Dogs";
import { Users } from "./Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quotes />
        <Fox />
        <Dogs />
        <Users />
      </div>
    );
  }
}

export default App;
