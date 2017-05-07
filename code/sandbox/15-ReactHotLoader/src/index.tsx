// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppContainer } from "react-hot-loader";

import HelloMessage from './HelloMessage';

const renderApp = (Component: typeof HelloMessage) => {
	ReactDOM.render(
		<AppContainer>
			<Component greeting="Hello" repeat={true}/>
		</AppContainer>,
		document.getElementById("mount")
	);
};

renderApp(HelloMessage);

if (module.hot) {
	module.hot.accept("./HelloMessage", () => {
	    // Hot Re-load should work without re-require according to Webpack 2 docs,
	    // but does not
		const NextApp = require<RequireImport>("./HelloMessage").default;
		renderApp(NextApp);
	});
}
