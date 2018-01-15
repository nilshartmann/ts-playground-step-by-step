import * as React from 'react';
import { SyntheticEvent } from "react";

// https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript
// React: http://stackoverflow.com/questions/43768915/how-to-use-typescript-jsdoc-annotations-for-react-proptypes
// React Example: https://github.com/kimamula/ts-jsdoc-support-react

// this still seems to be a little unstable...:
// 1. if you change the 'greeting' type of HelloMessageState to boolean or number
// the assignment in the constructor still works (should be an error)
// But: if you replace the assignment with sth like "this.setState = { greeting: 123 }"
// TypeScript throws an error (correct)

// 2. if you use something like 'const a = this.state.notDefinedProperty' no error is raised?!

// 3. more things in the comments below

/**
 * @typedef {{greeting: string}} HelloMessageProps
 * @typedef {{greeting: string}} HelloMessageState
 */


        // setState<K extends keyof S>(state: Pick<S, K>, callback?: () => any): void;


/**
 * 1. constructor or class JSDoc tags not supported yet
 * 2. need to specify all react callback functions and properties ?!
 *
 * @type {{ new(props: HelloMessageProps): {
     props: Readonly<HelloMessageProps>,
     state: Readonly<HelloMessageState>,
		 input?: HTMLInputElement,
		 render: () => JSX.Element,
		 setState: any,
		 forceUpdate: any,
		 context: any,
		 refs: any

   } }}
 */
class HelloMessage extends React.Component {
	// raises an error (CORRECT): wrong return type for render
	// render() {
	// 	return {
	// 		xxx: 'xxx'
	// 	};
	// }

	render() {
		// should raise an error, but does NOT:
		// const a = this.state.notDefinedProperty;

		// shout both raise errors but does NOT:
		// this.props.greeting = 'xxx';
		// this.props.x = '';

		// raises an error (CORRECT): onValidCallback is not a valid prop for button
		// const brokenButton = <button onInvalidCallback={() => this.reset()} />;

		// raises an error (CORRECT), as onClick must not be a string
		// const brokenButton = <button onClick="string" />;
			return (
					<div>
							<input ref={input => this.input = input}
											onChange={event => this.updateModel(event)}
											value={this.state.greeting} />
							<p>{this.state.greeting}, World</p>
							<button
									onClick={() => this.reset()}>
									Clear
							</button>
					</div>);
		}
	 /**
		* @param {HelloMessageProps} props
	  */
    constructor(props) {
        super(props);
				this.state = { greeting: this.props.greeting };
				// raises an error if the line above is commented out
				// this.state = { greeting: 7 };


				// invoking an unknown function does not work (CORRECT):
				// this.callUnkownFunction();
    }
    reset() {
			this.setState({ greeting: "" });

			// should raise an Error but does NOT:
			// this.setState({someOtherGreeting: 'hihi'});

			this.input && this.input.focus();

			// raises error (CORRECT), as doNotFocus does not exisits on HTMLInputElement:
			//  this.input.doNotFocus();

			// should raise an error, as state is Readonly but does not:
			// this.state = { greeting: 'hhh ' };

    }
   /**
		* @param {SyntheticEvent<HTMLInputElement>} event
	  */
    updateModel(event) {
        this.setState({greeting: event.currentTarget.value});
    }
}

export default HelloMessage;
