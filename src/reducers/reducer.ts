import { reducerWithInitialState } from 'typescript-fsa-reducers'
import {combineReducers} from 'redux'
import { gameActions } from '../actions/action'

export type gameState = {
    history: any
    stepNumber: number
    xIsNext: boolean
}

export type AppState = {
    game: gameState
}

const initialState: gameState = {
    history: [
        {
            squares: Array(9).fill('')
        }
    ],
    stepNumber: 0,
    xIsNext: true,
}

export const gameReducer = reducerWithInitialState(initialState)
    .case(gameActions.handleClick, (state, i) => {
        return Object.assign({}, state, {i})
    })

export default () => combineReducers<AppState>({
    game: gameReducer
})
