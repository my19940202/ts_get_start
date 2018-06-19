import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello, TestBar } from "./component/Hello";
// import { RcreDemo } from "./component/RcreDemo";
import '@baidu/native-ads-antd/dist/@baidu/native-ads-antd.css';
import {Popover, Button, Row, Col } from '@baidu/native-ads-antd';
import { HashRouter, Route, hashHistory, Switch,Link} from 'react-router-dom';

// import { cc, ck } from "./util";
const content = (
    <div>
        <h1>人生啊</h1>
        <p>Popover的content</p>
        <p>6666 张大千的</p>
    </div>
);

const Default = ({match}) => {
    document.title = 'default';
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
            </ul>
        </div>
    );
};

const MyAntd = () => {
    document.title = 'antd的组件使用';
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

// main router
// <Route path="/rcre" component={RcreDemo} />
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
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById("app")  as HTMLElement
);
