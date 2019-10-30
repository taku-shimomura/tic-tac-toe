import React from 'react'
import {Action} from 'typescript-fsa'
import Square from './Square'
import '../style.css'

type BoardProps = {
    squares: Array<number>
    onClick: () => Action<void>
}

const Board = (props) => {
    return(
        <div>
            <div className="board-row">
                <Square
                    value={props.squares[0]}
                    onClick={() => props.onClik(0)}
                />
                <Square
                    value={props.squares[1]}
                    onClick={() => props.onClik(1)}
                />
                <Square
                    value={props.squares[2]}
                    onClick={() => props.onClik(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={props.squares[3]}
                    onClick={() => props.onClik(3)}
                />
                <Square
                    value={props.squares[4]}
                    onClick={() => props.onClik(4)}
                />
                <Square
                    value={props.squares[5]}
                    onClick={() => props.onClik(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={props.squares[6]}
                    onClick={() => props.onClik(6)}
                />
                <Square
                    value={props.squares[7]}
                    onClick={() => props.onClik(7)}
                />
                <Square
                    value={props.squares[8]}
                    onClick={() => props.onClik(8)}
                />
            </div>
        </div>
    )
}

export default Board
