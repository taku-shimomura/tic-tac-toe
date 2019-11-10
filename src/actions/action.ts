import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const gameActions = {
  handleClick: actionCreator<number>("GAME_HANDLE_CLICK")
};
