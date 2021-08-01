/**
 * 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。
 *
 */
const hello : string = "hello louis";
console.log(hello);     // hello louis

// 类
class site {
    name() :void {
        console.log("我是一个类");
    }
}
var obj = new site();
obj.name();     // 我是一个类

/*****    TypeScript 基础类型    ******/
let decLiteral: number = 6;
console.log("定义数字：", decLiteral);   // 定义数字： 6

let name2: string = "我是";
let paragrah: string = `啦啦， ${name2} 谁？ 你是 ${hello}`;
console.log("定义字符串：", name2);      // 定义字符串： 我是
console.log(paragrah);                  // 啦啦， 我是 谁？ 你是 hello louis

let flag: boolean = true;
console.log("定义布尔类型：", flag);       // 定义布尔类型： true

// 在元素类型后面加上[]
let arr: number[] = [1, 3];
// 使用数组泛型
let arr2: Array<number> = [4, 6];
console.log("定义数组方式一：", arr);       // 定义数组方式一： [ 1, 3 ]
console.log("定义数组方式二：", arr2);      // 定义数组方式二： [ 4, 6 ]

let tupleAA: [string, number];
tupleAA = ["jack", 30];
console.log("定义元组类型：", tupleAA);    // 定义元组类型： [ 'jack', 30 ]
console.log("获取元组元素：", tupleAA[0]); // 获取元组元素： jack

enum Color {red, green, Blue};
let c: Color = Color.Blue;
let c2: Color = Color.red;
console.log(c2 + " " + c);      // 0 2

function hello22(): void {
    console.log("void 没有返回值");      // void 没有返回值
}
hello22();

let tt11: any = 1; // 写法①
let tt22 = 1;      // 写法②
// 上面两个写法等价，区别是第一种写法可以再赋值其它类型，第二种行(做了 类型推断)： 1 1
console.log("上面两个写法等价，区别是第一种写法可以再赋值其它类型，第二种行(做了 类型推断)：", tt11, tt22);
// tt11 = "333";
// tt22 = "455";

let x: any = 1;
x = "我是字符串";
x = 111;
console.log("定义任意类型any：", x);   // 定义任意类型any： 111

let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
console.log("定义任意类型数组any[]：", arrayList);   // 定义任意类型数组any[]： [ 1, 100, 'fine' ]

let xx: string;
console.log("不定义值，默认是 undefined：", xx);     // 不定义值，默认是 undefined： undefined
let xx2: undefined;
console.log(xx2);       // undefined

let x2: number | null | undefined;
x = 1;
x = null;
x = undefined;
console.log("定义多个类型|：", x);     // 定义多个类型|： undefined
console.log("typeof 运算符：", typeof x);       // typeof 运算符： undefined

let m: never;
let n: number;
// m = (() => { throw new Error("我是错误对象")})();
// n = (() => { throw new Error("我也是错误对象啊")})();

function error11(message: string): never {
    throw new Error(message);
}
// error11("我还是错误，哈哈");

function loop11(): never {
    while(true) {}
}
// loop11();

var str = "1";
var str2: boolean = <boolean> <any> str;    // 允许变量从一种类型更改为另一种类型
console.log("类型断言（Type Assertion）：", str2);     // 类型断言（Type Assertion）： 1


/*****    变量作用域    ******/
var global_num = 12;        // 全局变量
class Numbers {
    num_val = 13;           // 实例变量
    static val = 10;        // 静态变量

    storeNum(): void {
        var local_num = 14; // 局部变量
    }
}
console.log("全局变量为: " + global_num);    // 全局变量为: 12

// 以上代码使用 tsc 命令编译为 JavaScript 代码为：
var global_num2 = 12;       // 全局变量
var Numbers22 = /** @class */ (function () {
    function Numbers22() {
        this.num_val = 10;  // 实例变量
    }

    Numbers22.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };

    Numbers22.sval = 10;    // 静态变量

    return Numbers22;
}());


/*****    TypeScript  运算    ******/
var counter: number = 5;
var i: number;
var factorial = 1;
for (i = counter; i > 0; i--) {
    factorial *= i;
}
console.log("运算 && for循环：", factorial);     // 运算 && for循环： 120

var counter22: any;
var list22: any = "a b c";
console.log("运算 && for...in 循环：");
for (counter22 in list22) {
    console.log(list22[counter22]);
    // a
    //
    // b
    //
    // c
}

// for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。
// for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等
let arr22 = [1, "aaa", false];
for (let piece of arr22) {
    console.log(piece);
    // 1
    // aaa
    // false
}


/*****    TypeScript 接口    ******/
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: ()=>string,
    commandLine: (()=>string) | string | string[]
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: ():string => {
        return "Hi there"
    },
    commandLine: 'test'
}
console.log("Customer对象 ", customer.firstName, customer.lastName, customer.sayHi()); // Customer对象  Tom Hanks Hi there

var options22: IPerson = {
    firstName: "louis",
    lastName: "Hanks",
    sayHi: ():string => {
        return "Hi there"
    },
    commandLine: ["chu", "xin"]
};
console.log("options22对象 ", options22.firstName, options22.commandLine); // options22对象  louis [ 'chu', 'xin' ]

var options33: IPerson = {
    firstName: "louis",
    lastName: "Hanks",
    sayHi: ():string => {
        return "Hi there"
    },
    commandLine: () => {return "I am chuxin"}
};
console.log("options33对象 ", options33.firstName, options33.commandLine); // options33对象  louis [Function: commandLine]
var myFunc: any = options33.commandLine;
console.log("函数值为：", myFunc());     // 函数值为： I am chuxin

interface namelist {
    [index:number]:string
}
var list2: namelist = ["aa", "bb", "cc"];
console.log("将数组的索引和元素设为不同类型：", list2);   // 将数组的索引和元素设为不同类型： [ 'aa', 'bb', 'cc' ]

interface AAA {
    age: number
}
interface CCC {
    album: string
}
interface BBB extends AAA {
    instrument: string
}
var drummer = <BBB> {};
drummer.age = 27;
drummer.instrument = "你好啊";
console.log("多接口继承①：", drummer.age, drummer.instrument);        // 多接口继承①： 27 你好啊

interface DDD extends AAA, CCC {}
var drummer22: DDD = {age: 30, album: "月亮代表我的心"};
console.log("多接口继承②：", drummer22.age, drummer22.album);     // 多接口继承②： 30 月亮代表我的心

// 高: 2.5cm (一片)
// 长： > 30cm
// 宽： > 25cm