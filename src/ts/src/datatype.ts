let str:string = 'hello world';
let num:number = 0;
let bool:boolean = false;

// symbol
let sml:symbol = Symbol();
let sml2:symbol = Symbol();
console.log(sml === sml2);


let nu:null = null;
let un:undefined = undefined;
let vd:void = undefined;
vd = null;
// vd = 1;
// vd = true;


// 数组
let arr:Array<string> = ['1'];
let ary: number[] = [1];

// 对象
let obj:{ a:number} = {a: 1};
obj.a = 2;
let obj2:object = { a: 1, b: 2 };
// obj2.a = 3;

// 元组
let tuple:[string, number] = ['1', 2];
tuple.push(3);
console.log(tuple);
// console.log(tuple[2]); 元组越界

// 函数
let a = (a: number, b: number):number => {
    return a + b;
}
let b:(a: number, b: number) => number;
b = (x, y) => x + y;

let vod = (a:number, b: number):void => {
    a + b;
    // return; // 返回值必须是undefined
};

// never 永远不会有返回值
let error = (a: number, b: string):never => {
    a + b;
    throw new Error("");
}
let loop = ():never => {
    while(true){}
}

let fn = function (a: number, b: number) {
    throw new Error('a');
}

function foo(a: number, b: number):void {
    throw new Error('a');
}

/**
 * ts 在对函数声明、函数表达式、箭头函数有不同的处理
 * 函数声明里面抛出错误，函数返回值类型是void；
 * 而函数表达式和箭头函数在此种情况下是 never类型
 */


let canNotReach = (a: number | string) => {
    if ( typeof a === 'string') {
        console.log('string')
    } else if (typeof a === 'number') {
        console.log('number')
    } else {
        console.log(a); // a never
    }
}
/**
 * never 与 void类型
 * void 类型的函数，指的是函数没有显式的返回值<默认返回undefined>或者显式的返回undefined; 不能显式的返回其他类型的值
 * never 一般是指函数不能正确的结束，不能够执行到返回一个值，往往是抛出了错误、死循环、或者不能触达的条件分支
*/



// any
let any:any = 1;
any = 's';
any = [];
any = () => {};






