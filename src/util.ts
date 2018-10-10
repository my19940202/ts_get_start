import {concat, chunk} from 'lodash';

// 变量声明指定类型
let isDone: boolean = false;
let xx: any = 'fuck you';

// 参数和返回值都需要定义好参数的类型
export function cc(param: number[], p2: number):number[] {
    return concat(param, 2);
}

export function ck(param: number[], p2: number):number[][] {
    return chunk(param, 2);
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = (source: string, subString: string) =>{
    return source.search(subString) !== -1;
}

console.log("函数的使用" ,mySearch('xsbisiasfas', 'as'));

// 数组类型指定
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
let fib: number[] = [1, 1, 2, 3, 5];
let arr: any[] = ['123', true, 123, [3,2,1]];
console.log("数组的使用",fibonacci, fib, arr);

// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// let toBoolean = (something: string | number): boolean => {
//     return <boolean>something;
// }

let anyValue:any="mmm";
// (<string>anyValue) = 123;
// (anyValue as string) = 123;
(<string>anyValue) = "abc";

console.log(anyValue, 'anyValue')
// console.log("Assertion",toBoolean(11));
