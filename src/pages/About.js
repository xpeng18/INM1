import logo from "../images/logo.svg";
import '../App.css';

export default function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          **XP About** 
        </p>
      </header>
    </div>
  );
}


/* import React from "react";

export default class About extends React.Component {
  render() {
    return (
        <h1>waht</h1>
    );
  }
} */