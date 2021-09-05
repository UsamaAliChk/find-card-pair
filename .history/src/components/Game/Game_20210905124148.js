import React, { useState } from "react";
import Board from "../../containers/Board/Board";
import UserInput from "../../containers/UserInput/UserInput";
import "./Game.css";

export default function Game() {
  const [size, setsize] = useState("6 pairs");
  const [score, setscore] = useState(0);
  const [tries, settries] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Find the Pairs</h2>
      <div className="Game">
        <div>
          <Board
            size={size}
            score={score}
            setscore={setscore}
            settries={settries}
            tries={tries}
          />
        </div>
        <div style={{ marginLeft: "50px" }}>
          <UserInput
            setsize={setsize}
            score={score}
            tries={tries}
            size={size}
          />
        </div>
      </div>
    </div>
  );
}
