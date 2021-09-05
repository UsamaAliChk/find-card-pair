import React from "react";
import Board from "../../containers/Board/Board";
import UserInput from "../../containers/UserInput/UserInput";
export default function Game() {
  return (
    <div>
      <div>
        <Board type="6" />
      </div>
      <div>
        <UserInput />
      </div>
    </div>
  );
}
