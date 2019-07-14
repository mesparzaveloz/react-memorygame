//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <a class="navbar-brand" href="#">Memory Test Game</a>
         <ul>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;