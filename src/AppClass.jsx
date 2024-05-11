import React, { Component } from "react";
import "./App.css";
import BoxClass from "./components/BoxClass";
import rockImage from "./image/rock.png";
import scissorsImage from "./image/scissors.png";
import paperImage from "./image/paper.png";

const images = [
  { name: "rock", src: rockImage },
  { name: "scissors", src: scissorsImage },
  { name: "paper", src: paperImage },
];

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      comSelect: null,
      result: "",
    };
  }
  play = (userChoice) => {
    const userChoiceItem = images.find((item) => item.name === userChoice);

    const computerChoice = this.randomItem();
    this.setState({
      userSelect: userChoiceItem,
      comSelect: computerChoice,
      result: this.getResult(userChoiceItem, computerChoice),
    });
  };

  randomItem = () => images[Math.floor(Math.random() * images.length)];

  getResult = (user, com) => {
    if (user.name === com.name) return "tie";
    else if (user.name === "rock")
      return com.name === "scissors" ? "win" : "lose";
    else if (user.name === "scissors")
      return com.name === "paper" ? "win" : "lose";
    else if (user.name === "paper") return com.name === "rock" ? "win" : "lose";
    else return "Error";
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="main">
            <BoxClass
              title="You"
              item={this.state.userSelect}
              result={this.state.result}
            />
            <BoxClass
              title="Computer"
              item={this.state.comSelect}
              result={this.state.result}
            />
          </div>
          <div className="buttons">
            {images.map(
              (
                item,
                index //{}이면 return 필요!!
              ) => (
                <button key={index} onClick={() => this.play(item.name)}>
                  <img src={item.src} alt={item.name} />
                </button>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
