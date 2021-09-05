function showType(args) {
    console.log(args);
}
showType({ id: 11, left: "test11", right: "test00" });
function showType22(args) {
    console.log(args);
}
showType22("test22");
showType22(22);
// 泛型类型   我用的是 T（这个名称随你决定）这个名字
function showType33(args) {
    console.log(args);
}
showType33("test33");
showType33(33);
function showType44(args) {
    console.log(args);
}
showType44({ id: 4, name: "test44" });
function showType55(args) {
    console.log(args);
}
showType55({ id: 5, name: 555 });
function showType66(args) {
    console.log(args);
}
showType66({ id: 6, name: "test66" });
function showType77(args) {
    console.log(args);
}
showType77({ id: "test77", name: ["test-77-1", "test-77-2", "test-77-3"] });
function showType88(args) {
    console.log(args);
}
showType88({ id: 8 });
showType88({ firstName: "test888-1", lastName: "test888-22" });
function showType99(args) {
    console.log(args);
}
showType99({ id: 9, firstName: "test999-11", lastName: "test999-22" });
function showType_AAA(args) {
    // args.id = 100;    //  error TS2540: Cannot assign to 'id' because it is a read-only property.
    console.log(args);
}
showType_AAA({ id: 10, firstName: "test10-11", lastName: "test10-22" });
function showType_BBB(args) {
    // args.id = 1000;   //  error TS2540: Cannot assign to 'id' because it is a read-only property.
    console.log(args);
}
showType_BBB({ id: 10, firstName: "test10-11", lastName: "test10-22" });
function showType_CCC(args) {
    console.log(args);
}
showType_CCC({ firstName: "test111-11", lastName: "test222-22" });
function showType_DDD(args) {
    console.log(args);
}
showType_DDD({ id: 12 });
var employees = {
    0: { id: 1, fullname: "John Doe", role: "Designer" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" }
};
function showType_FFF(args) {
    console.log(args);
}
showType_FFF("test");
showType_FFF(1);
showType_FFF(null); // 奇怪，这里没报错 ？？？
showType_FFF(undefined); // 奇怪，这里没报错 ？？？
function showType_GGG(args) {
    console.log(args);
}
// showType_GGG({id: 17, name: "test-17"}); // error TS2322: Type 'number' is not assignable to type 'string'.
showType_GGG({ id: "test-17-id", name: "test-17-name" });
// 类型保护
// 类型保护使你可以用运算符检查变量或对象的类型
// typeof
function showType_HHH(x) {
    if (typeof x === "number") {
        return "the result is " + (x + x);
    }
    console.log("This operation can't be done on a " + typeof x);
}
showType_HHH("I'm not a number");
showType_HHH(7);
// instanceof
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.bar = function () {
        return "hello world";
    };
    return Foo;
}());
var Bar22 = /** @class */ (function () {
    function Bar22() {
        this.baz = "123";
    }
    return Bar22;
}());
function showType_III(args) {
    if (args instanceof Foo) {
        console.log(args.bar());
        return args.bar();
    }
    console.log("The type is not supported");
}
showType_III(new Foo());
showType_III(new Bar22());
function showType_JJJ(args) {
    if ("x" in args) {
        console.log("The property " + args.x + " exists");
        return "The property " + args.x + " exists";
    }
    console.log("This type is not expected");
}
showType_JJJ({ x: 7 });
showType_JJJ({ y: "ccc" });
