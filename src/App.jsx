import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg/440px-Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg",
  },
  paper: {
    name: "Rock",
    img: "https://pandapaperroll.com/wp-content/uploads/2022/03/A4-letterhead-printing-header-paper.jpg",
  },
  scissor: {
    name: "Rock",
    img: "https://i.ebayimg.com/images/g/Sf8AAOSwDINipyBs/s-l1600.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <>
      <div className="main">
        <Box title="User" item={userSelect} />
        <Box title="Computer" />
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
