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
        this.state = {greeting: this.props.greeting};
    }
    reset() {
        this.setState({greeting: ""});
		// this.input might be undefined, so we have to check before
        this.input && this.input.focus();
    }
    updateModel(event) {
        this.setState({greeting: event.target.value});
    }
}
