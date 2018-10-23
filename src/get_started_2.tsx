/// <reference path='./global.d.ts' />
// 声明文件间的依赖 https://www.tslang.cn/docs/handbook/triple-slash-directives.html
import * as React from 'react';
import * as ReactDOM from 'react-dom';
let ff: globalData = {
    username: 'xishengbo'
};

console.log(ff);

// 范型的使用
// ##场景1: 要求函数输入输出的type一致
function test1(params: number): number {
    return params;
}
function test2(params: any): any {
    return params;
}
// test1 test2 这样写法达不到效果 T帮助我们捕获用户传入的类型
function identity<T>(arg: T): T {
    console.log(typeof arg);
    
    return arg;
}
identity(123);
identity(true);

// 明确参数类型
identity<string>("myString")
// 让编译器自己进行类型推导
identity("myString");

// ##场景2: 要指定参数的可能的类型
// function logging<T>(arg: T): T {
//     console.log(arg.length); // 类型推导出问题 T 编译器没有推导出有length属性
//     return arg;
// }
// logging([])
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
loggingIdentity([12,3,4,5])
loggingIdentity([])

function ide<T>(arg: T): T {
    return arg;
}
// 这个是函数赋值 差点一眼没看出来
let myIden: { <T>(arg: T): T } = identity;
console.log(myIden("u motherfucker"));

ReactDOM.render(
    <div>
        <h1>typescript 奇奇怪怪的用法篇</h1>
        <h4>1. reference path='./global.d.ts' 声明文件间的依赖</h4>
        <h4>2. 对泛型的用法 还是不清楚 &lt;T&gt; </h4>
        <h4>3. 装饰器</h4>
    </div>,
  document.getElementById("app") as HTMLElement
);