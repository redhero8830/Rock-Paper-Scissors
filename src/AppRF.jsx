import React, { useState } from "react";
import "./App.css";
import BoxRF from "./components/BoxRF";
import rockImage from "./image/rock.png";
import scissorsImage from "./image/scissors.png";
import paperImage from "./image/paper.png";

const images = [
  { name: "rock", src: rockImage },
  { name: "scissors", src: scissorsImage },
  { name: "paper", src: paperImage },
];

export default function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    const userChoiceItem = images.find((item) => item.name === userChoice);

    setUserSelect(userChoiceItem);

    const computerChoice = randomItem();
    setComSelect(computerChoice);

    const result = getResult(userChoiceItem, computerChoice);
    setResult(result);
  };

  const randomItem = () => images[Math.floor(Math.random() * images.length)];

  const getResult = (user, com) => {
    if (user.name === com.name) return "tie";
    else if (user.name === "rock")
      return com.name === "scissors" ? "win" : "lose";
    else if (user.name === "scissors")
      return com.name === "paper" ? "win" : "lose";
    else if (user.name === "paper") return com.name === "rock" ? "win" : "lose";
    else return "Error";
  };

  return (
    <div className="container">
      <div className="main">
        <BoxRF title="You" item={userSelect} result={result} />
        <BoxRF title="Computer" item={comSelect} result={result} />
      </div>
      <div className="buttons">
        {images.map(
          (
            item,
            index //{}이면 return 필요!!
          ) => (
            <button key={index} onClick={() => play(item.name)}>
              <img src={item.src} alt={item.name} />
            </button>
          )
        )}
      </div>
    </div>
  );
}
