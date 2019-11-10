import React from "react";
import { gameState } from "../reducers/reducer";
import { GameActions } from "../containers/GameContainer";
import Board from "./Board";
import "../style.css";

type IProps = gameState & GameActions;

const Game = (props: IProps) => {
  const current = props.history[0].squares;
  return (
    <div>
      <div>
        <Board squares={current} onClick={props.handleClick} />
      </div>
      <div></div>
    </div>
  );
};

export default Game;
