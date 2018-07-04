import * as React from "react";
export interface HelloProps { compiler: string; framework: string; }

// 函数式的组件写法
export const Hello = (props: HelloProps) => {
    return (<h1>Hello from {props.compiler} and {props.framework}!</h1>);
};


// 一般的组件class写法
export class TestBar extends React.Component<HelloProps, {}> {
// class TestBar extends React.Component<HelloProps, {}> {
    constructor(props: HelloProps) {
        super(props);
    }
    render() {
        let style: any = {
            width: '100%',
            height: 100,
            textAlign: 'center',
            background: 'rgba(11,11,11,0.6)'
        };
        return (
            <div style={style}>
                <h1>ps sps sps </h1>
            </div>
        );
    }
}
