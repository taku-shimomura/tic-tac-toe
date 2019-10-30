import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import reducer from './reducers/reducer'
import GameContainer from './containers/GameContainer'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
