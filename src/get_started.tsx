import * as React from "react";
import * as ReactDOM from "react-dom";
import './style.css';
// 常用的各类的变量
let isDone: boolean = false;
let xx: any = 'fuck you';
console.log(xx, isDone, 'dude');
// 类型分配

// class

// 奇奇怪怪的写法



ReactDOM.render(
    <div>
        <h1>fuck you</h1>
    </div>,
    document.getElementById("app") as HTMLElement
);