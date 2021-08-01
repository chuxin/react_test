/******     函数    ******/
// 普通函数  字符串
function greet(firstName: string, lastName: string, age: number = 29): string {
    return firstName + " " + lastName + " " + age + " hello world";
}
console.log(greet("louis", "qian"));    // louis qian 29 hello world
// 普通函数  数组
function disp22(arr_sites: string[]): string[] {
    return arr_sites;
}
var sites: string[] = new Array("Google","Runoob","Taobao","Facebook");
console.log(disp22(sites));     // [ 'Google', 'Runoob', 'Taobao', 'Facebook' ]
// 普通函数  对象
var siteObj = {
    site1: "aaaaa",
    site2: "bbbbb"
};
var invokeSites = function (obj: {site1: string, site2: string}) {
    console.log(obj.site1, obj.site2);
}
invokeSites(siteObj);   // aaaaa bbbbb
// 剩余参数
function addInfos(...restOfInfos:string[]) {
    console.log(restOfInfos);
}
addInfos("aa", "bb", "cc");     // [ 'aa', 'bb', 'cc' ]

// 匿名函数
var res = function (a: number, b: number) {
    return a * b;
}
console.log(res(2, 3));     // 6

// 匿名函数自调用
(function () {
    let x = "hello";
    console.log(x);     // hello
})();

// 构造函数
var my_function = new Function("a", "b", "return a * b");
var x = my_function(4, 2);
console.log(x);     // 8

// 递归函数
function factorial(number) {
    if (number <= 0) {
        return 1;
    } else {
        return (number * factorial(number - 1));
    }
}
console.log(factorial(6));  // 720

// 箭头函数
var foo = (x: number) => 10 + x;
console.log(foo(4));    // 14

// 函数重载
// 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
//      如果参数类型不同，则参数类型应设置为 any。
//      参数数量不同你可以将不同的参数设置为可选。
function disp(s1: string): void;
function disp(n1: number, s1: string): void;
// 问号(?) 表示可选属性。含义是：使用这个属性时，要么这个属性名不存在，要么必须符合属性的类型定义
function disp(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}
disp("abc");            // abc  undefined
disp(1, "xyz");     // 1    xyz


/******     Number 数字    ******/
// TypeScript Number 属性
console.log("最大值为：" + Number.MAX_VALUE);    // 最大值为：1.7976931348623157e+308
console.log("最小值为：" + Number.MIN_VALUE);    // 最小值为：5e-324
console.log("负无穷大：" + Number.MAX_VALUE);    // 负无穷大：1.7976931348623157e+308
console.log("正无穷大：" + Number.MAX_VALUE);    // 正无穷大：1.7976931348623157e+308
console.log(Number.NaN);                        // NaN

// prototype 实例
function employee(id: number, name: string) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "admin");
employee.prototype.email = "admin@runoob.com";
console.log(emp.id);        // 123
console.log(emp.name);      // admin
console.log(emp.email);     // admin@runoob.com


/******     String 字符串    ******/
// 方式①
var txt = new String("string");
// 方式②
var txt2 = "string";


/******     Array 数组    ******/
var array_age: string[] = ['1', '3', '5'];
console.log(array_age);     // [ '1', '3', '5' ]

// 指定初始化数组的大小
var arr_names: number[] = new Array(4);
for (var i = 0; i < arr_names.length; i++) {        // 这里如果是 <= 就会无限循环，内存溢出
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
    // 0
    // 2
    // 4
    // 6
}
arr_names[4] = 998;
console.log(arr_names);     // [ 0, 2, 4, 6, 998 ]

// 数组迭代
var j: any;
var nums: number[] = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(j, nums[j]);
    // 0 1001
    // 1 1002
    // 2 1003
    // 3 1004
}

// 多维数组
var multi: number[][] = [[1, 3, 6], [2, 5, 7]];
console.log(multi[1][1]);       // 5
console.log(multi);             // [ [ 1, 3, 6 ], [ 2, 5, 7 ] ]


/******     Map 对象    ******/
// 注意： 因为 Map 对象是 es6 里的，所以要指定编译目标  tsc --target es6 datatype.ts
let mapObj = new Map();
// 设置 Map 对象
mapObj.set("google", 1);
mapObj.set("runoob", 2);
mapObj.set("taobao", 3);
mapObj.set("jingdong", 4);
// 获取键对应的值
console.log(mapObj.get("runoob"));      // 2
console.log(mapObj.get("runoob2"));     // undefined
// 判断 Map 中是否包含键对应的值
console.log(mapObj.has("runoob"));      // true
console.log(mapObj.has("runoob2"));     // false
// 返回 Map 对象键/值对的数量
console.log(mapObj.size);                    // 4
// 删除 Runoob
console.log(mapObj.delete("runoob"));   // true
console.log(mapObj);            // Map { 'google' => 1, 'taobao' => 3, 'jingdong' => 4 }
// 迭代 Map 中的 key
for (let key of mapObj.keys()) {
    console.log(key);
    // google
    // taobao
    // jingdong
}
// 迭代 Map 中的 value
for (let value of mapObj.values()) {
    console.log(value);
    // 1
    // 3
    // 4
}
// 迭代 Map 中的 key => value   方法①
for (let entry of mapObj.entries()) {
    console.log(entry[0], entry[1]);
    // google 1
    // taobao 3
    // jingdong 4
}
// 迭代 Map 中的 key => value   方法②
for (let [key, value] of mapObj) {
    console.log(key, value);
    // google 1
    // taobao 3
    // jingdong 4
}
// 移除 Map 对象的所有键/值对
mapObj.clear();
console.log(mapObj);        // Map {}


/******     Tuple 元组    ******/
// 数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。
// 创建元组 方式①
// var mytuple = [];
// mytuple[0] = 10;
// mytuple[1] = "Runoob";
// console.log(mytuple);
// 创建元组 方式②
var mytuple = [10, "Runoob"];
console.log(mytuple);           // [ 10, 'Runoob' ]
mytuple.push(555);
mytuple.push(666);
console.log(mytuple.length);    // 4
// 删除元组
console.log("删除并返回删除元素：" + mytuple.pop());  // 删除并返回删除元素：666
console.log(mytuple);           // [ 10, 'Runoob', 555 ]
// 更新元组
mytuple[0] = 11;
console.log(mytuple);           // [ 11, 'Runoob', 555 ]
// 解构元组  把元组元素赋值给变量
var [a1, b1, c1] = mytuple;
console.log(a1, b1, c1);        // 11 Runoob 555


/******     联合类型 Union Types    ******/
var myValue: string | number;
myValue = "runoob";
console.log(myValue);           // runoob
myValue = 11;
console.log(myValue);           // 11
// 联合类型数组
var arrUT: string[] | number[];
var i: number;
arrUT = ["aaa", "bbbb", "ccc"];
for (i = 0; i < arrUT.length; i++) {
    console.log(arrUT[i]);
    // aaa
    // bbbb
    // ccc
}
arrUT = [11, 22, 33];
for (i = 0; i < arrUT.length; i++) {
    console.log(arrUT[i]);
    // 11
    // 22
    // 33
}


/******     类    ******/
class car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
    disp(): void {
        console.log("car 类的属性engine值为：" + this.engine);
    }
}
var carObj = new car("Germany发动机");
console.log(carObj.engine);     // Germany发动机
carObj.disp();                  // car 类的属性engine值为：Germany发动机

// 类的继承
class chinaCar extends car {
    disp22(): void {
        console.log("chinaCar 类的属性engine值为：" + this.engine);
    }
}
var chinaCarObj = new chinaCar("china发动机");
console.log(chinaCarObj.engine);    // china发动机
chinaCarObj.disp22();               // chinaCar 类的属性engine值为：china发动机

// 子类重写父类方法
class PrintClass {
    doPrint(): void {
        console.log("父类的doPrint方法");
    }
}
class StringPrinter extends PrintClass {
    doPrint(): void {
        super.doPrint();
        console.log("子类的doPrint方法");
    }
}
var stringPrinterObj = new StringPrinter();
stringPrinterObj.doPrint();     // 父类的doPrint方法     // 子类的doPrint方法

// static 关键字  &  访问控制修饰符
class StaticMem {
    static num: number;
    public str1: string = "hello";      // public（默认） : 公有，可以在任何地方被访问。
    protected str2: string = "world";   // protected : 受保护，可以被其自身以及其子类和父类访问。
    private str3: string = "louis";     // private : 私有，只能被其定义所在的类访问。

    static disp(): void {
        console.log("num值为：" + StaticMem.num);
    }
}
StaticMem.num = 12;
StaticMem.disp();       // num值为：12
var staticMemObj = new StaticMem();
console.log(staticMemObj.str1);     // hello

// instanceof 运算符
class person {}
var obj = new person();
var isPerson = obj instanceof person;
console.log(isPerson);      // true

// 类和接口
interface loan {
    interest: number;
    x: number;
    y: number;
}
class AgriLoan implements loan {
    interest: number;
    x: number;
    y: number;
    rebate: number;

    constructor (interest: number, rebate: number) {
        this.interest = interest;
        this.rebate = rebate;
    }

    calculateSomething(p1: loan, p2: loan) {
        var x = p1.x + p2.x;
        var y = p1.y + p2.y;
        var interest = p1.interest + p2.interest;
        console.log({x:x, y:y, interest:interest});
    }
}
var agriLoanObj = new AgriLoan(10, 2);
console.log("利润为:" + agriLoanObj.interest + ", 抽成为：" + agriLoanObj.rebate); // 利润为:10, 抽成为：2
agriLoanObj.calculateSomething({x: 1, y: 2, interest: 3}, {x: 2, y: 3, interest: 4});  // { x: 3, y: 5, interest: 7 }


/******     对象    ******/
var myObj = {
    key1: "value1",
    key2: function () {  },    // 此处为类型模板
    key3: ["content11", "content22"],
    sayHello: function() {  }     // 此处为类型模板
}
myObj.sayHello = function(){ return "hello";}   // 上面 sayHello 不定义，这边直接赋值使用会报错。因为Typescript中的对象必须是特定类型的实例
console.log(myObj.key2());              // undefined
console.log(myObj.key1, myObj.key3);    // value1 [ 'content11', 'content22' ]




