import React from 'react'
import {Action} from 'typescript-fsa'
import '../style.css'

type SquareProps = {
    value: string
    index: number
    onClick: (index: number) => Action<number>
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {
    return (
        <button className="square" onClick={() => props.onClick(props.index)}>
            {props.value}
        </button>
    )
}

export default Square
