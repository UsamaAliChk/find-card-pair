import React, { useState, useEffect } from "react";
import Board from "../../containers/Board/Board";
import UserInput from "../../containers/UserInput/UserInput";
import "./Game.css";

export default function Game() {
  const [size, setsize] = useState("6 pairs");
  const [score, setscore] = useState(0);
  useEffect(() => {}, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Find the Pairs</h2>
      <div className="Game">
        <div>
          <Board size={size} score={score} setscore={setscore} />
        </div>
        <div style={{ marginLeft: "50px" }}>
          <UserInput setsize={setsize} score={score} />
        </div>
      </div>
    </div>
  );
}
