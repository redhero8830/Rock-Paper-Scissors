import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://partyzzang.co.kr/web/product/small/202305/db16fba4ff16fb26ba1de406a27c2d10.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://lh3.googleusercontent.com/proxy/YOEzI26N4HZnGXBzMlqYu2Z9S-M5Uyjn0kmGA8pzPpLfdCA0rFrtg4kkR-7CG0wQ2hKN2-VwynspzEok4UKEg8t1uJoM5alzo2Y_QlAsNRh-H38FQlRWKA",
  },
  scissor: {
    name: "Scissors",
    img: "https://thumbnail.10x10.co.kr/webimage/image/basic600/196/B001969629-4.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComSelect(computerChoice);
    judgement(choice[userChoice], computerChoice);
  };

  const randomChoice = () => {
    //객체를 랜덤으로 선택하는 알고리즘
    let itemArray = Object.keys(choice); //Object.keys -> 객체의 키 값만 뽑아서 배열로 만들어주는 함수
    // console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
    //처음에는 당연히 모름..
    //어려운 것부터 하면서 이해와 함께 외워짐
  };

  const judgement = (user, com) => {
    console.log(user, com);
    if (user.name === com.name) {
      setResult("Tie");
    } else if (user.name === "Rock") {
      com.name === "Scissors" ? setResult("Win") : setResult("Lose");
    } else if (user.name === "Paper") {
      com.name === "Rock" ? setResult("Win") : setResult("Lose");
    } else if (user.name === "Scissors") {
      com.name === "Paper" ? setResult("Win") : setResult("Lose");
    }
  };

  return (
    <div className="container">
    <h1>Rock-Paper-Scissors</h1>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={comSelect} result={result} />
      </div>
      <div className="buttons">
        <button onClick={() => play("scissor")}>
          <img src="https://thumbnail.10x10.co.kr/webimage/image/basic600/196/B001969629-4.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false" alt="scissors"/>
        </button>
        <button onClick={() => play("rock")}>
        <img src="https://partyzzang.co.kr/web/product/small/202305/db16fba4ff16fb26ba1de406a27c2d10.jpg" alt="paper"/>
        </button>
        <button onClick={() => play("paper")}>
        <img src="https://lh3.googleusercontent.com/proxy/YOEzI26N4HZnGXBzMlqYu2Z9S-M5Uyjn0kmGA8pzPpLfdCA0rFrtg4kkR-7CG0wQ2hKN2-VwynspzEok4UKEg8t1uJoM5alzo2Y_QlAsNRh-H38FQlRWKA" alt="rock"/>
        </button>
      </div>
    </div>
  );
}

export default App;
