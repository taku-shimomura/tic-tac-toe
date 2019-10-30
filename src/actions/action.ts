import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const gameActions = {
    handleClick: actionCreator<any>('GAME_HANDLE_CLICK')
}
