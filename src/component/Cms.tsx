import * as React from "react";

// 一般的组件class写法
interface HelloProps {
    name: string;
}
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
                <h1>name is  {this.props.name} </h1>
            </div>
        );
    }
}
