import { reducerWithInitialState } from 'typescript-fsa-reducers'
import {combineReducers} from 'redux'
import { gameActions } from '../actions/action'

export interface gameState {
    history: [{
        squares: string[]
    }]
    stepNumber: number
    xIsNext: boolean
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
        //クリックしたら x か ◯ がつく。 
        return Object.assign({}, state, {i}) 
    })

export type AppState = {
    game: gameState
}

export default () => combineReducers<AppState>({
    game: gameReducer
})
