import React from "react";
import { gameState } from "../reducers/reducer";
import { GameActions } from "../containers/GameContainer";
import Board from "./Board";
import "../style.css";

type IProps = gameState & GameActions;

const Game = (props: IProps) => {
  console.log("GameComponent Debug Start");
  console.log("stepNumber");
  console.log(props.stepNumber);
  console.log("history");
  console.log(props.history[0].squares);
  console.log("GameComponent Debug End");
  // const current = props.history[props.stepNumber]
  const current = props.history[0].squares;
  console.log("current");
  console.log(current);
  return (
    <div>
      <div>
        {/* <Board squares={current.squares} onClick={props.handleClick} /> */}
        <Board squares={current} onClick={props.handleClick} />
      </div>
      <div></div>
    </div>
  );
};

export default Game;
