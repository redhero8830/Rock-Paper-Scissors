import React from "react";

export default function Box({ title, item, result }) {
  let newResult= "";
  if (title === "Computer" && result !== "tie" && result !== "") {
    newResult = result === "win" ? "lose" : "win";
  } else newResult = result;

  return (
    <div className={`box`}>
      <h1>{title}</h1>
      <div>
        <img className="box-img" src={item?.src} alt="" />
      </div>
      <h2>{newResult}</h2>
    </div>
  );
}
