// import React, { Component } from "react";
// import "./App.css";
// import BoxClass from "./components/BoxClass";
// import rockImage from "./image/rock.png";
// import scissorsImage from "./image/scissors.png";
// import paperImage from "./image/paper.png";

// const choice = {
//   rock: {
//     name: "Rock",
//     img: rockImage,
//   },
//   paper: {
//     name: "Paper",
//     img: scissorsImage,
//   },
//   scissors: {
//     name: "Scissors",
//     img: paperImage,
//   },
// };

// export default class AppClass extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userSelect: null,
//       computerSelect: null,
//       result: "",
//     };
//   }

//   play = (userChoice) => {
//     let computerChoice = this.randomChoice();
//     this.setState({
//       userSelect: choice[userChoice],
//       computerSelect: computerChoice,
//       result: this.judgement(choice[userChoice], computerChoice),
//     });
//   };
//   randomChoice = () => {
//     let itemArray = Object.keys(choice);
//     let randomItem = Math.floor(Math.random() * itemArray.length);
//     let final = itemArray[randomItem];
//     return choice[final];
//   };
//   judgement = (user, com) => {
//     if (user.name === com.name) {
//       return "Tie";
//     } else if (user.name === "Rock")
//       return com.name === "Scissors" ? "Win" : "Lose";
//     else if (user.name === "Scissors")
//       return com.name === "Paper" ? "Win" : "Lose";
//     else if (user.name === "Paper") return com.name === "Rock" ? "Win" : "Lose";
//   };

//   render() {
//     return (
//       <div className="container">
//         <h1>Rock-Paper-Scissors</h1>
//         <div className="main">
//           <BoxClass
//             title="You"
//             item={this.state.userSelect}
//             result={this.state.result}
//           />
//           <BoxClass
//             title="Computer"
//             item={this.state.computerSelect}
//             result={this.state.result}
//           />
//         </div>
//         <div className="buttons">
//           <button onClick={() => this.play("rock")}>
//             <img src={choice.rock.img} alt="rock" />
//           </button>
//           <button onClick={() => this.play("paper")}>
//             <img src={choice.paper.img} alt="paper" />
//           </button>
//           <button onClick={() => this.play("scissors")}>
//             <img src={choice.scissors.img} alt="scissors" />
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
