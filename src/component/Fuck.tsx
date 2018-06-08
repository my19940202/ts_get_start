import * as React from "react";

export interface FuckProps {
    compiler: string;
    framework: string;
}

export const Fuck = (props: FuckProps) => {
    return (
        <article>
            <h1>标题 {props.compiler} and {props.framework}!</h1>
            <p>this is content</p>
        </article>
    );
};