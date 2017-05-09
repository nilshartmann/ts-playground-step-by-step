import * as React from 'react';

// https://github.com/Microsoft/TypeScript/pull/15160
type TitleProps = {
    children: string
}

const Title = ({children}: TitleProps) => <h1>{children}</h1>;

export default Title;
