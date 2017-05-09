// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import HelloMessage from './HelloMessage';

const mountNode = document.getElementById('mount');
// ouch
// ReactDOM.render(<HelloMessage greeting={10}/>, mountNode);
// also ouch
// ReactDOM.render(<HelloMessage/>, mountNode);
ReactDOM.render(<HelloMessage greeting="Huhu" repeat={true}/>, mountNode);
