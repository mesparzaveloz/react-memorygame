//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import offRoad from "./offRoad.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    offRoad,
    clickedJeep: [],
    score: 0
  };

//when you click on a card ... the off road is taken out of the array
  imageClick = event => {
    const currentJeep = event.target.alt;
    const JeepAlreadyClicked =
      this.state.clickedJeep.indexOf(currentJeep) > -1;

//if you click on an image that has already been selected, the game is reset and cards reordered
    if (JeepAlreadyClicked) {
      this.setState({
        offRoad: this.state.offRoad.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedJeep: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available vehicule, your score is increased and cards reordered
    } else {
      this.setState(
        {
          offRoad: this.state.offRoad.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedJeep: this.state.clickedJeep.concat(
            currentJeep
          ),
          score: this.state.score + 1
        },
//if you get all 12 vehicules correct you'll get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              offRoad: this.state.offRoad.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedJeep: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.offRoad.map(offRoad => (
            <FriendCard
              imageClick={this.imageClick}
              id={offRoad.id}
              key={offRoad.id}
              image={offRoad.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;