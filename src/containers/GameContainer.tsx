import {Action} from 'typescript-fsa'
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import {gameActions} from '../actions/action'
import Game from '../components/Game'
import {gameState} from '../reducers/reducer'

export interface GameActions {
    handleClick: (i: number) => Action<any>
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
    return {
        handleClick: (i: number) => dispatch(gameActions.handleClick(i))
    }
}

const mapStateToProps = (state: gameState) => {
    return Object.assign({}, state)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)
