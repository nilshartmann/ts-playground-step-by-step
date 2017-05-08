// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import HelloMessage from './HelloMessage';

const mountNode = document.getElementById('mount');
ReactDOM.render(
    <Provider store={store}>
        <HelloMessage repeat={true}/>
    </Provider>,
    mountNode);
