// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import HelloMessage from './HelloMessage';

const mountNode = document.getElementById('mount');

const component = <HelloMessage greeting="Hello" />;

// const componentDoesNotWork = <HelloMessage greeting="Hello" greetingSomeOneElse="Hello" />
// // => unkown property greetingSomeOneElse

// const componentAlsoDoesNotWork = <HelloMessage />
// // => missing required prop greeting

ReactDOM.render(component, mountNode);

