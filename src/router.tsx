import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, Link} from 'react-router-dom';
import history from './history';

const content = () => { 
    return (
        <div>
            <h1>人生啊</h1>
            <p>Popover的content</p>
            <p>6666 张大千的</p>
        </div>
    );
};

interface PropsInterface {
    match: any;
    location: any;
}

// const Default = (props: PropsInterface) => {
//     // console.log("this is props", props);
//     document.title = 'default';
//     return (
//         <h1>
//             router相关学习, 该路由传递了参数：{props.match.params.indexId || "null"}
//             state: {props.location.state && props.location.state.price || "null"}
//         </h1>
//     );
// };


// 和上面写法是一样的
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
            <p>
                BrowserRouter和HashRouter的区别: 后者适用于老浏览器，使用#处理不同的url
            </p>
            <ul style={{fontSize: 18}}>
                <li><Link to="/antd">antd get started</Link></li>
                <li><Link to="/">Defalt component</Link></li>
                <li><Link to="/get/110">get number</Link></li>
                <li><Link to="/test">test component</Link></li>
                <li>
                    <Link to={{
                      pathname: '/',
                      search: '?sort=name',
                      state: { price: 18 }
                    }}>
                    Link to 传入 object</Link>
                </li>
            </ul>
        </div>
    );
};

ReactDOM.render(
    <Router history={history}>
        <div>
            <Header/>
                <Route exact path="/" component={Default} />
                <Route path="/new" component={content} />
                <Route path="/get/:indexId" component={Default} />
                <Route path="/test" component={() => (
                    <div><h1>没有单独抽离的组件</h1></div>
                )} />
        </div>
    </Router>,
    document.getElementById("app")  as HTMLElement
);
