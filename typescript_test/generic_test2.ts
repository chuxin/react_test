// Intersection 类型
type leftType = {
    id: number,
    left: string
}
type rightType = {
    id: number,
    right: string
}
type intersectionType = leftType & rightType;
function showType(args: intersectionType) {
    console.log(args);
}
showType({id: 11, left: "test11", right: "test00"});


// Union 类型
type unionType = string | number;
function showType22(args: unionType) {
    console.log(args);
}
showType22("test22");
showType22(22);


// 泛型类型   我用的是 T（这个名称随你决定）这个名字
function showType33<T>(args: T) {
    console.log(args);
}
showType33("test33");
showType33(33);


// 接口 GenericType 接收通用类型 T。 它是可重用的
interface myGeneric<T> {
    id: number,
    name: T
}
function showType44(args: myGeneric<string>) {
    console.log(args);
}
showType44({id: 4, name: "test44"});
function showType55(args: myGeneric<number>) {
    console.log(args);
}
showType55({id: 5, name: 555});


// 泛型 接收多个参数
interface myGeneric222<T, U> {
    id: T,
    name: U
}
function showType66(args: myGeneric222<number, string>) {
    console.log(args);
}
showType66({id: 6, name: "test66"});
function showType77(args: myGeneric222<string, string[]>) {
    console.log(args);
}
showType77({id: "test77", name: ["test-77-1", "test-77-2", "test-77-3"]});


// Partial<T>
// Partial 允许你将所有类型为 T 的属性设为可选。它将在每个字段旁边添加一个 ? 标记
interface PartialType88 {
    id: number
    firstName: string
    lastName: string
}
function showType88(args: Partial<PartialType88>) {
    console.log(args);
}
showType88({id: 8});
showType88({firstName: "test888-1", lastName: "test888-22"});


// Required<T>
// 与 Partial 不同，Required 使所有类型为 T 的属性成为必需的。
// 即使在之前先将它们设为可选的，Required 也会使所有符合条件的属性成为必需的。而且如果省略掉属性的话TypeScript 将会引发错误。
interface RequiredType99 {
    id: number
    firstName?: string
    lastName?: string
}
function showType99(args: Required<RequiredType99>) {
    console.log(args);
}
showType99({id: 9, firstName: "test999-11", lastName: "test999-22"});
// showType99({id: 999}); //   Type '{ id: number; }' is missing the following properties from type 'Required<RequiredType99>': firstName, lastName


// Readonly<T>
// 这个类型会对所有类型为 T 的属性进行转换，使它们无法被重新赋值。
// 写法①
interface ReadonlyType_AAA {
    id: number
    firstName: string
    lastName: string
}
function showType_AAA(args: Readonly<ReadonlyType_AAA>) {
    // args.id = 100;    //  error TS2540: Cannot assign to 'id' because it is a read-only property.
    console.log(args);
}
showType_AAA({id: 10, firstName: "test10-11", lastName: "test10-22"});
// 写法②
interface ReadonlyType_BBB {
    readonly id: number
    firstName: string
    lastName: string
}
function showType_BBB(args: ReadonlyType_BBB) {
    // args.id = 1000;   //  error TS2540: Cannot assign to 'id' because it is a read-only property.
    console.log(args);
}
showType_BBB({id: 10, firstName: "test10-11", lastName: "test10-22"});


// Pick<T, K>
// 从现有的模型 T 中创建一个新类型， 新类型为 K
// T 是集合，k 是要从集合里选择的属性。还可以通用管道符号 （|）将它们分开来选择多个字段。
interface PickType {
    id: number
    firstName: string
    lastName: string
}
function showType_CCC(args: Pick<PickType, "firstName" | "lastName">) {
    console.log(args);
}
showType_CCC({firstName: "test111-11", lastName: "test222-22"});
// showType_CCC({firstName: "test111-11"});  // Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'Pick<PickType, "firstName" | "lastName">'.
// showType_CCC({id: 11, firstName: "test111-11", lastName: "test222-22"});  //  Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'.
// showType_CCC({id: 11});     //  Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'.


// Omit<T, K>
// Omit 与Pick 相反。它从类型 T 中删除 K 属性。
interface OmitType {
    id: number
    firstName: string
    lastName: string
}
function showType_DDD(args: Omit<PickType, "firstName" | "lastName">) {
    console.log(args);
}
showType_DDD({id: 12});
// showType_DDD({id: 12, firstName: "test222-11"}); // Object literal may only specify known properties, and 'firstName' does not exist in type 'Omit<PickType, "firstName" | "lastName">'.


// Extract<T, U>
// 从  T  中提取所有可分配给  U  的属性
// 通过 Extract 可以把 id 提取出来。如果你有多个共享字段，Extract 将会提取所有相似的属性。
interface FirstType {
    id: number
    firstName: string
    lastName: string
}
interface SecondType {
    id: number
    address: string
    city: string
}
type ExtractType = Extract<keyof FirstType, keyof SecondType>   // "id"
// function showType_EEE(args: ExtractType) {
//     console.log(args);
// }
// showType_EEE({id: 13});


// Exclude<T, U>
// 与 Extract 不同，Exclude  从 T 中排除了所有可以分配给 U 的字段。
type ExcludeType = Exclude<keyof FirstType, keyof SecondType>  // "firstName" | "lastName"


// Record<K,T>
// 构造一个类型
// 用 number 作为类型，这就是我们把 0、1 和 2 作为 employees 变量的键的原因。如果试图将字符串用作属性，则会引发错误。
// 接下来，属性集由 EmployeeType 给出，因此该对象具有字段 id、 fullName 和 role。
interface EmployeeType {
    id: number
    fullname: string
    role: string
}
let employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: "John Doe", role: "Designer" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
}


// NonNullable<T>
// 它允许你从类型 T 中删除 null 和 undefined
type fewTypes = string | number | null | undefined;
function showType_FFF(args: NonNullable<fewTypes>) {
    console.log(args);
}
showType_FFF("test");
showType_FFF(1);
showType_FFF(null);         // 奇怪，这里没报错 ？？？
showType_FFF(undefined);    // 奇怪，这里没报错 ？？？


// 映射类型
// 获取现有模型并将其每个属性转换为新类型。
// 注意，上面介绍的一些类型也是映射类型（从 partial 开始）。
type StringMap<T> = {
    [P in keyof T]: string      // 找到所有传入的 key， 定义它的 value 为 string
}
function showType_GGG(args: StringMap<{id: number; name: string}>) {
    console.log(args);
}
// showType_GGG({id: 17, name: "test-17"}); // error TS2322: Type 'number' is not assignable to type 'string'.
showType_GGG({id: "test-17-id", name: "test-17-name"});


// 类型保护
// 类型保护使你可以用运算符检查变量或对象的类型
// typeof
function showType_HHH(x: string | number) {
    if (typeof x === "number") {
        return `the result is ${x + x}`
    }
    console.log(`This operation can't be done on a ${typeof x}`);
}
showType_HHH("I'm not a number");
showType_HHH(7);

// instanceof
class Foo {
    bar () {
        return "hello world";
    }
}
class Bar22 {
    baz = "123"
}
function showType_III(args: Foo | Bar22) {
    if (args instanceof Foo) {
        console.log(args.bar())
        return args.bar()
    }
    console.log("The type is not supported")
}
showType_III(new Foo());
showType_III(new Bar22());

// in
interface FirstType22 {
    x: number
}
interface SecondType22 {
    y: string
}
function showType_JJJ(args: FirstType22 | SecondType22) {
    if ("x" in args) {
        console.log(`The property ${args.x} exists`)
        return `The property ${args.x} exists`
    }
    console.log("This type is not expected")
}
showType_JJJ({ x: 7 })
showType_JJJ({ y: "ccc" })

/*
参考博文： https://cloud.tencent.com/developer/article/1767961

待看的：
    https://juejin.cn/post/6919359418505609230#heading-7
    https://www.jianshu.com/p/3a425987dead
    https://www.cnblogs.com/V587Chinese/p/11478492.html