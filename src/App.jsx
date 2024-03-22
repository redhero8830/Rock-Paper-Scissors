import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import rockImage from "./image/rock.png";
import scissorsImage from "./image/scissors.png";
import paperImage from "./image/paper.png";

const choice = {
  rock: {
    name: "Rock",
    img: rockImage,
    // img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpSJwo%2FbtqXJV1lACE%2Fnx5XrxkCLWXh9UsnoS8vbK%2Fimg.png",
  },
  paper: {
    name: "Paper",
    img: scissorsImage,
    // img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmjB2s%2FbtqXHhp6kpG%2FTH14W4U612SxKo9uuR2sB0%2Fimg.png",
  },
  scissors: {
    name: "Scissors",
    img: paperImage,
    // img: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHfURw%2FbtqXKvOTNWK%2FgWTwPXEg9QzSV0ilOuwuak%2Fimg.png",
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
        <button onClick={() => play("rock")}>
          <img src={choice.rock.img} alt="rock" />
        </button>
        <button onClick={() => play("paper")}>
          <img src={choice.paper.img} alt="paper" />
        </button>
        <button onClick={() => play("scissors")}>
          <img src={choice.scissors.img} alt="scissors" />
        </button>
      </div>
    </div>
  );
}

export default App;
