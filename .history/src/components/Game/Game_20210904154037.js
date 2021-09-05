import React, { useState, useEffect } from "react";
import Board from "../../containers/Board/Board";
import UserInput from "../../containers/UserInput/UserInput";
import "./Game.css";

export default function Game() {
  const [size, setsize] = useState("6 pairs");
  useEffect(() => {
    console.log("usama ali");
  }, [size]);
  return (
    <div className="Game">
      <div>
        <Board size={size} />
      </div>
      <div style={{ marginLeft: "130px" }}>
        <UserInput setsize={setsize} />
      </div>
    </div>
  );
}
