import React, { useState, useEffect } from "react";
import Board from "../../containers/Board/Board";
import UserInput from "../../containers/UserInput/UserInput";
import "./Game.css";

export default function Game() {
  const [size, setsize] = useState("10 pairs");
  useEffect(() => {}, []);
  return (
    <div className="Game">
      <div>
        <Board size={size} />
      </div>
      <div style={{ marginLeft: "50px" }}>
        <UserInput setsize={setsize} />
      </div>
    </div>
  );
}
