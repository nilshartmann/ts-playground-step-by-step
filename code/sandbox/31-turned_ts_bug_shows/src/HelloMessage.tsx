import * as React from 'react';
import {SyntheticEvent} from "react";
import { connect } from 'react-redux';

import {updateGreeting, resetGreeting} from './actions';

type Props = {
    greeting: string;
    repeat?: boolean;
    resetGreeting: () => void;
    updateGreeting: (greeting: string) => void;
};

class HelloMessage extends React.Component<Props, undefined> {
    input: HTMLInputElement;
    render() {
        const { greeting, repeat, updateGreeting } = this.props;

        const output = <p>{greeting}, World</p>;

        return (
            <div>
                <input ref={input => this.input = input}
                       onChange={(event: SyntheticEvent<HTMLInputElement>) => updateGreeting(event.currentTarget.value)}
                       value={greeting} />
                {output}
                {
                    repeat && output
                }
                <button
                    onClick={() => this.reset()}>
                    Clear
                </button>
            </div>);
    }
    reset() {
        const { resetGreeting } = this.props;
        this.input.focus();
        resetGreeting();
    }
}

export default connect(
    state => ({greeting: state.greeting}),
    {updateGreeting, resetGreeting}
)(HelloMessage);
