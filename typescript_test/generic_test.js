/******     泛型函数    ******/
var service = {
    getStringValue: function () {
        return "I'm a string";
    },
    getNumberValue: function () {
        return 200;
    }
};
function middleWareLaLa(value) {
    console.log(value);
    return value;
}
var sVal = middleWareLaLa(service.getStringValue());
var nVal = middleWareLaLa(service.getNumberValue());
/******     泛型类    ******/
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// 多个类型参数
function identities(arg1, arg2) {
    console.log(arg1 + typeof arg1);
    console.log(arg2 + typeof arg2);
    var aaa = {
        id1: arg1,
        id2: arg2
    };
    return aaa;
}
// 范型变量
function arrayDemo(dataArr) {
    console.log(dataArr.length);
    return dataArr;
}
