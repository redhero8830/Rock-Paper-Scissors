// import React, { useState } from "react";
// import "./App.css";
// import Box from "./components/Box";
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

// export default function App() {
//   const [userSelect, setUserSelect] = useState(null);
//   const [comSelect, setComSelect] = useState(null);
//   const [result, setResult] = useState("");
//   const [total, setTotal] = useState(0);
//   const [rockClick, setRockClick] = useState(0);
//   const [paperClick, setPapaerClick] = useState(0);
//   const [scissorsClick, setScissorsClick] = useState(0);

//   const play = (userChoice) => {
//     setUserSelect(choice[userChoice]);
//     let computerChoice = randomChoice();
//     setComSelect(computerChoice);
//     judgement(choice[userChoice], computerChoice);

//     setTotal((prev) => prev + 1);
//     if (userChoice === "rock") setRockClick((prev) => prev + 1);
//     else if (userChoice === "paper") setPapaerClick((prev) => prev + 1);
//     else if (userChoice === "scissors") setScissorsClick((prev) => prev + 1);
//   };

//   const randomChoice = () => {
//     //객체를 랜덤으로 선택하는 알고리즘
//     let itemArray = Object.keys(choice); //Object.keys -> 객체의 키 값만 뽑아서 배열로 만들어주는 함수
//     // console.log(itemArray);
//     let randomItem = Math.floor(Math.random() * itemArray.length);
//     let final = itemArray[randomItem];
//     return choice[final];
//     //처음에는 당연히 모름..
//     //어려운 것부터 하면서 이해와 함께 외워짐
//   };

//   const judgement = (user, com) => {
//     console.log(user, com);
//     if (user.name === com.name) {
//       setResult("Tie");
//     } else if (user.name === "Rock") {
//       com.name === "Scissors" ? setResult("Win") : setResult("Lose");
//     } else if (user.name === "Paper") {
//       com.name === "Rock" ? setResult("Win") : setResult("Lose");
//     } else if (user.name === "Scissors") {
//       com.name === "Paper" ? setResult("Win") : setResult("Lose");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>
//         Rock-Paper-Scissors : {total} {total > 10 ? "🔥" : "💠"}
//       </h1>
//       <div className="main">
//         <Box title="You" item={userSelect} result={result} />
//         <Box title="Computer" item={comSelect} result={result} />
//       </div>
//       <div className="buttons">
//         <button onClick={() => play("rock")}>
//           <img src={choice.rock.img} alt="rock" />
//         </button>
//         <h3>{rockClick}</h3>
//         <button onClick={() => play("paper")}>
//           <img src={choice.paper.img} alt="paper" />
//         </button>
//         <h3>{paperClick}</h3>
//         <button onClick={() => play("scissors")}>
//           <img src={choice.scissors.img} alt="scissors" />
//         </button>
//         <h3>{scissorsClick}</h3>
//       </div>
//     </div>
//   );
// }
