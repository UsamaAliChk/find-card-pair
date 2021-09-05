import React from "react";

import "./UserInput.css";

export default function UserInput({ setsize, score, tries, size, clicked }) {
  let totalScore = 0;
  if (size === "6 pairs") {
    totalScore = 6;
  } else if (size === "8 pairs") {
    totalScore = 8;
  } else {
    totalScore = 10;
  }
  return (
    <div className="UserInput">
      <h4>Score</h4>
      <h4>
        <strong style={{ color: "#1890FF" }}>{score}</strong>/{totalScore}
      </h4>
      <p>Tries : {tries}</p>
      <div className="striaghtLine"></div>
      <h4>Options</h4>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>Size</p>
        <select
          onChange={(e) => setsize(e.target.value)}
          style={{ height: "20px", padding: "0px 20px", marginLeft: "10px" }}
        >
          <option>6 pairs</option>
          <option>8 pairs</option>
          <option>10 pairs</option>
        </select>
      </div>
      <button className="Button" onClick={clicked}>
        Restart
      </button>
    </div>
  );
}
