import React from 'react'
import { gameState } from '../reducers/reducer'
import { GameActions } from '../containers/GameContainer'
import Board from './Board'
import '../style.css'

type IProps = gameState & GameActions

const Game = (props: IProps) => {
    console.log(props)
    console.log(props.history)
    const current = props.history[props.stepNumber]
    return(
        <div>
            <div>
                <Board squares={current.squares} onClick={props.handleClick} />
            </div>
            <div>
            </div>
        </div>
    )
}

export default  Game
