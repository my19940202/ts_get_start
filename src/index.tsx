import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello, TestBar } from "./component/Hello";
import '@baidu/native-ads-antd/dist/@baidu/native-ads-antd.css';
import {Popover, Button, Row, Col } from '@baidu/native-ads-antd';
import { HashRouter, Route, hashHistory, Switch,Link} from 'react-router-dom';
import {Render} from '@baidu/rcre-core';

// import { cc, ck } from "./util";
const content = (
    <div>
        <h1>人生啊</h1>
        <p>Popover的content</p>
        <p>6666 张大千的</p>
    </div>
);

const Default = ({match}) => {
    return (
        <h1>router相关学习, 该路由传递了参数：{match.params.indexId || "null"}</h1>
    );
};

const Header = () => {
    return (
        <div>
            <h1>下面是router</h1>
            <ul style={{fontSize: 18}}>
                <li><Link to="/antd">antd get started</Link></li>
                <li><Link to="/">Defalt component</Link></li>
                <li><Link to="/get/110">get number</Link></li>
                <li><Link to="/test">test component</Link></li>
                <li><Link to="/rcre">RECE get started</Link></li>
            </ul>
        </div>
    );
};

const MyAntd = () => {
    return (
        <div>
            <h1>antd的组件使用 adafs</h1>
            <Popover content={content} title="suck">
                <Button type="primary">Hover me</Button>
            </Popover>
            <br/>
            <Row>
                <Col style={{background: 'red'}} span={12}>col-12</Col>
                <Col style={{background: 'blue'}} span={12}>col-12</Col>
            </Row>
            <br/>
            <Row>
                <Col style={{background: 'yellow'}} span={8}>col-8</Col>
                <Col style={{background: 'red'}} span={8}>col-8</Col>
                <Col style={{background: 'blue'}} span={8}>col-8</Col>
            </Row>
        </div>
    );
};

const RcreDemo = () => {
    const config: any = {
        body: [{
                type: 'text',
                text: 'helloworld'
            }, {
                "type": "container",
                "model": "formThree",
                "children": [
                    {
                        "type": "input",
                        "name": "text",
                        "style": {
                            "width": 200
                        }
                    },
                    {
                        "type": "text",
                        "text": "如果你给input组件输入一些文字，文字的值会自动同步到Container组件"
                    },
                    {
                        "type": "text",
                        "style": {
                            "display": "block"
                        },
                        "text": "从Container组件读取到的值： #ES{$data.text}"
                    }
                ]
            }, {
                "type": "container",
                "model": "hiddenExample",
                "data": {
                    "hidden": false
                },
                "children": [{
                    "type": "checkbox",
                    "text": "隐藏",
                    "name": "hidden"
                }, {
                    "type": "text",
                    "text": "这是一个文本",
                    "hidden": "#ES{$data.hidden}"
                }, {
                    "type": "text",
                    "text": "这是另外一个文本",
                    "show": "#ES{$data.hidden}"
                }]
            }, {
                "type": "container",
                "model": "testExample",
                "data": {
                    "test": false
                },
                "children": [
                    {
                        "type": "div",
                        "name": "text",
                        "style": {
                            "width": 400,
                            "height": 80,
                            "background": "red"
                        }
                    }, {
                        "type": "input",
                        "name": "text",
                        "style": {
                            "width": 200,
                            "color": "red",
                            "fontSize": 18
                        }
                    }
                ]
            }
        ]
    };


    const toggleEx = {
        "body": []
    };

    return (
        <div>
            <h1>hello world </h1>
            <Render code={JSON.stringify(config)} />
        </div>
    );
};

// main router
ReactDOM.render(
    <HashRouter history={hashHistory}>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Default} />
                <Route path="/get/:indexId" component={Default} />
                <Route path="/antd" component={MyAntd} />
                <Route path="/test" component={() => (
                    <div><h1>没有单独抽离的组件</h1></div>
                )} />
                <Route path="/rcre" component={RcreDemo} />
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById("app")  as HTMLElement
);
