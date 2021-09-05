import React from "react";
import Board from "../../containers/Board/Board";
import UserInput from "../../containers/UserInput/UserInput";
import "./Game.css";
export default function Game() {
  return (
    <div className="Game">
      <div>
        <Board type="6" />
      </div>
      <div>
        <UserInput />
      </div>
    </div>
  );
}
