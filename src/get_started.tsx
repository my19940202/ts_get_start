import * as React from "react";
import * as ReactDOM from "react-dom";
import './style.css';
// 常用的各类的变量（切换类型会报错）

// 基础类型
let isSet: boolean = false;
let str: string = 'this is string';
let count: number = 1234;
let xx: any = 'fuck you';

// 数组
let arr: boolean[] = [true, false];
let numArr: number[] = [123, 12];
let strArr: string[] = ['123', '321'];
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
// str = 1234; error,but null and undefined  can be assigned to anything
str = null;
str = undefined;

// union type(联合类型)
let unionVar: number | string | boolean;
unionVar = 123;
unionVar = '123';
unionVar = false;
// alias(别名)
type multitypes = number | string | boolean;
let a:multitypes = 123;
a = '123';
a = false;

// multi type
interface Person {
     name: string;
    age: number;
    readonly sex: string;
    // 可选属性
    money?: number;
}
let xsb: Person = {
    name: 'xishenhbo',
    age: 21,
    sex: 'male'
};
xsb.age = 25;
// 只读熟悉不允许修改
// readonly 和 const 之间的区分：作为变量和作为某个属性
// xsb.sex = 'female';

// inline type annotation 
let human: {
    name: string;
    age: number;
    sex: string;
}
human = {
    name: 'xishenhbo',
    age: 21,
    sex: 'male'
};

// 函数定义
function test(input: string) :string {
    console.log(input);
    return input;
}

test('fff u');
// test(123);

ReactDOM.render(
    <div>
        <h1>typescript 类型篇</h1>
    </div>,
    document.getElementById("app") as HTMLElement
);