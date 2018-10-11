import * as React from "react";
import { Layout, Menu, Icon } from '@baidu/native-ads-antd';
import '@baidu/native-ads-antd/dist/@baidu/native-ads-antd.css';
import {Router, Route, Link} from 'react-router-dom';
import history from './../history';

const { Header, Content, Footer, Sider } = Layout;

// 一般的组件class写法
interface HelloProps {
    name: string;
}

const Default = ({match}) => {
    console.log(match);
    return (
        <h1>{match.params.detail || "null"}</h1>
    );
};

export class AntdGetStrted extends React.Component<HelloProps, {}> {
    private height: number;
    constructor(props: HelloProps) {
        super(props);
    }

    componentWillMount() {
        if (window && window.screen) {
            this.height = window.screen.availHeight;
        }
    }

    render() {
        let style:object = {
            height: this.height
        }
        return (
            <Router history={history}>
                <Layout style={style}>
                    <Sider
                        breakpoint="xs"
                        collapsedWidth="0"
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                        <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                                <Menu.Item key="1">
                                  <Icon type="user" />
                                  <span className="nav-text"><Link to="/111">类型1</Link></span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                  <Icon type="video-camera" />
                                  <span className="nav-text"><Link to="/222">类型2</Link></span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                  <Icon type="upload" />
                                  <span className="nav-text"><Link to="/333">类型3</Link></span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                  <Icon type="user" />
                                  <span className="nav-text"><Link to="/444">类型4</Link></span>
                                </Menu.Item>
                            </Menu>
                    </Sider>
                    
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            this is header
                        </Header>
                        <Content style={{ margin: '10px' }}>
                            <div style={{ padding: 10, background: '#fff', minHeight: 360 }}>
                                <h1>通过路由控制不同的内容展现 </h1>
                                <Route exact path="/" component={Default} />
                                <Route exact path="/:detail" component={Default} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}