# typescript 知识点相关整理

## 基础类型
```
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
```

## 构造类型
```
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
```

## 函数
```
// 普通参数
function test(input: string) :string {
    console.log(input);
    return input;
}
test('fff u');
// error: test(123);
// 参数设置可选
function optionalParam(p1: number, p2?: string) {
    console.log(`${p1} ~ ${p2}`);
}
optionalParam(123);
optionalParam(123, 'test');
// error optionalParam(123, 'test', '1234');
// 参数设置默认值
function defalutParamVal(p1:number, p2 = 123) {
    console.log(p1, p2)
}
defalutParamVal(123);
defalutParamVal(123, 321);

// 函数简写
let funcA = (a: number, b: number) => {
    console.log('简写的函数', a+b);
    return a + b;
};
let funcB = (a: number, b: number) => a + b;
let reJson = () => ({a: 1,b: 2}); 
/* 和下面的写法作用一样,返回一个json,json用()包起来
let reJson = () => {
    return {
        a: 1,
        b: 2
    }
};
*/
funcA(123, 321)
console.log(reJson());
console.log('this is funcB' ,funcB(123, 321));
// TODO:函数的this
// TODO:函数的重载
```

## class
```
// 一个简单的class
class Chinese {
    name: string;
    sex: string;
    age: number;
    constructor(name: string, sex: string, age: number) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    say() {
        console.log(`我是${this.name}, 今年${this.age}了`);
    }
}
class Shanghairen extends Chinese {
    howtown: string;
    constructor(name: string, sex: string, age: number, howtown: string) {
        super(name, sex, age);
        this.howtown = howtown;
    }
    say() {
        console.log(`阿拉是${this.name}, 今宁${this.age}了`);
    }
}
let zhangsan = new Chinese('张三', 'male', 33);
zhangsan.say();
let zhoulibo = new Shanghairen('周立波', 'male', 33, '上海');
zhoulibo.say();
```

## 其他犄角旮旯用法
```
/// <reference path='./global.d.ts' />
// 声明文件间的依赖 https://www.tslang.cn/docs/handbook/triple-slash-directives.html
// 引入定义文件，常用于一些全局维度的变量的声明
let ff: globalData = {
    username: 'xishengbo'
};
```