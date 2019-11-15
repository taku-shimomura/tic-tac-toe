import React from "react";
import { gameState } from "../reducers/reducer";
import { GameActions } from "../containers/GameContainer";
import Board from "./Board";
import { calculateWinner } from "../helpers/calculateWinner";
import "../style.css";

type IProps = gameState & GameActions;

const Game = (props: IProps) => {
  const current = props.history[0].squares;
  const winner = calculateWinner(current);

  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${props.xIsNext ? "X" : "○"}`;

  return (
    <div>
      <div>
        <Board squares={current} onClick={props.handleClick} />
      </div>
      <div>{status}</div>
    </div>
  );
};

export default Game;
