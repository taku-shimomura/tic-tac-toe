import { reducerWithInitialState } from "typescript-fsa-reducers";
import { combineReducers } from "redux";
import { gameActions } from "../actions/action";
import { calculateWinner } from "../helpers/calculateWinner";

export interface gameState {
  history: [
    {
      squares: string[];
    }
  ];
  stepNumber: number;
  xIsNext: boolean;
}

const initialState: gameState = {
  history: [
    {
      squares: Array(9).fill("")
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

export const gameReducer = reducerWithInitialState(initialState).case(
  gameActions.handleClick,
  (state, i) => {
    //クリックしたら x か ◯ がつく。
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return Object.assign({}, state);
    }

    if (!squares[i]) {
      squares[i] = state.xIsNext ? "X" : "○";
      current.squares = squares;
      state.stepNumber = history.length;
      state.xIsNext = !state.xIsNext;
    }
    return Object.assign({}, state);
  }
);

export type AppState = {
  game: gameState;
};

export default () =>
  combineReducers<AppState>({
    game: gameReducer
  });
