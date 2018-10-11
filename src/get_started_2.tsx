/// <reference path='./global.d.ts' />
// 声明文件间的依赖 https://www.tslang.cn/docs/handbook/triple-slash-directives.html
import * as React from 'react';
import * as ReactDOM from 'react-dom';
let ff: globalData = {
    username: 'xishengbo'
};

console.log(ff);

ReactDOM.render(
    <div>
        <h1>typescript 奇奇怪怪的用法篇</h1>
        <h4> reference path='./global.d.ts' 声明文件间的依赖</h4>
        <h4>reference</h4>
        <h4>reference</h4>
    </div>,
    document.getElementById('app') as HTMLElement
);