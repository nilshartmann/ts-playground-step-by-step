import * as React from 'react';

type Props = {
    greeting: string;
    // greeting: boolean; // Outsch
    repeat?: boolean;
};

type State = {
    greeting: string;
    // ouch
    // name: string;
}

export default class HelloMessage extends React.Component<Props, State> {
	static defaultProps: Partial<Props> = {
		repeat: true,
	};

    input?: HTMLInputElement;
    render() {
        const output = <p>{this.state.greeting}, World</p>;

        return (
            <div>
                <input ref={input => this.input = input}
                       onChange={event => this.updateModel(event)}
                       value={this.state.greeting} />
                {output}
                {
                    this.props.repeat && output
                }
                <button
                    onClick={() => this.reset()}>
                    Clear
                </button>
            </div>);
    }
    constructor(props) {
        super(props);
        // ERROR: Object literal may only specify known properties, and 'aha' does not exist in type 'Readonly<State>'
        // this.state = {greeting: this.props.greeting, aha: 10};
        this.state = {greeting: this.props.greeting};

        // READONLY
        // https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#partial-readonly-record-and-pick

        // ERROR: Cannot assign to 'greeting' because it is a constant or a read-only property.
        // this.state.greeting = 'no way';

        // ERROR: Property 'newStuff' does not exist on type 'Readonly<State>'.
        // this.state.newStuff = 'also not going to work'
    }
    reset() {
        this.setState({greeting: ""});
        this.input && this.input.focus();
    }
    updateModel(event) {
        this.setState({greeting: event.target.value});
    }
}
