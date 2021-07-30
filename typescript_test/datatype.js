/******     函数    ******/
// 普通函数
function greet(firstName, lastName, age) {
    if (age === void 0) { age = 29; }
    return firstName + " " + lastName + " " + age + " hello world";
}
console.log(greet("louis", "qian"));
// 剩余参数
function addInfos() {
    var restOfInfos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        restOfInfos[_i] = arguments[_i];
    }
    console.log(restOfInfos);
}
addInfos("aa", "bb", "cc");
// 匿名函数
var res = function (a, b) {
    return a * b;
};
console.log(res(2, 3));
// 匿名函数自调用
(function () {
    var x = "hello";
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
    }
    else {
        return (number * factorial(number - 1));
    }
}
console.log(factorial(6));
// 箭头函数
var foo = function (x) { return 10 + x; };
console.log(foo(4));
// 问号(?) 表示可选属性。含义是：使用这个属性时，要么这个属性名不存在，要么必须符合属性的类型定义
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
/******     Number对象    ******/
console.log("TypeScript Number 属性: ");
console.log("最大值为：" + Number.MAX_VALUE);
console.log("最小值为：" + Number.MIN_VALUE);
console.log("负无穷大：" + Number.MAX_VALUE);
console.log("正无穷大：" + Number.MAX_VALUE);
console.log(Number.NaN);
