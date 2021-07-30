/******     函数    ******/
// 普通函数
function greet(firstName: string, lastName: string, age: number = 29): string {
    return firstName + " " + lastName + " " + age + " hello world";
}
console.log(greet("louis", "qian"));

// 剩余参数
function addInfos(...restOfInfos:string[]) {
    console.log(restOfInfos);
}
addInfos("aa", "bb", "cc");

// 匿名函数
var res = function (a: number, b: number) {
    return a * b;
}
console.log(res(2, 3));

// 匿名函数自调用
(function () {
    let x = "hello";
    console.log(x);
})();

// 构造函数
var my_function = new Function("a", "b", "return a * b");
var x = my_function(4, 2);
console.log(x);

// 递归函数
function factorial(number) {
    if (number <= 0) {
        return 1;
    } else {
        return (number * factorial(number - 1));
    }
}
console.log(factorial(6));

// 箭头函数
var foo = (x: number) => 10 + x
console.log(foo(4));

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
disp("abc");
disp(1, "xyz");


/******     Number 数字    ******/
// TypeScript Number 属性
console.log("最大值为：" + Number.MAX_VALUE);
console.log("最小值为：" + Number.MIN_VALUE);
console.log("负无穷大：" + Number.MAX_VALUE);
console.log("正无穷大：" + Number.MAX_VALUE);
console.log(Number.NaN);

// prototype 实例
function employee(id: number, name: string) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "admin");
employee.prototype.email = "admin@runoob.com";
console.log(emp.id);
console.log(emp.name);
console.log(emp.email);


/******     String 字符串    ******/


