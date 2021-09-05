/******     泛型函数    ******/
var service = {
    getStringValue<T = string>(): T {
        return "I'm a string";
    },

    getNumberValue<T = number>(): T {
        return 200;
    }
};

function middleWareLaLa<T = string | number> (value: T): T {
    console.log(value);
    return value;
}

var sVal: string = middleWareLaLa(service.getStringValue());
var nVal: number = middleWareLaLa(service.getNumberValue());


/******     泛型类    ******/
class Person <T> {

}

/******     泛型接口    ******/
interface MyIdentity <T, U> {
    id1: T;
    id2: U;
}

// 多个类型参数
function identities <T, U> (arg1: T, arg2: U): MyIdentity <T, U> {
    console.log(arg1 + typeof arg1);
    console.log(arg2 + typeof arg2);
    let aaa: MyIdentity<T, U> = {
        id1: arg1,
        id2: arg2
    };
    return aaa;
}

// 范型变量
function arrayDemo <T> (dataArr: Array<T>): Array<T> {
    console.log(dataArr.length);
    return dataArr;
}


