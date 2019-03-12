interface Named {
    name: string;
    // age: 12;error
}

class Person {
    name: string;
    age: 12
}

//如果Nameed,Person两个中存在不一致的则会报错,此时只需要右边的类型包含左侧的类型
//的成员
let p: Named = new Person();

//比较两个函数
let fun1 = (a: number) => 0;
let fun2 = (b: number, s: string) => 0;

fun2 = fun1; //ok
// x = y; //error


//枚举类型
enum Status { Ready, Waiting };
enum Color {Red, Blue, Green};
let status = Status.Ready;
// status = Color.Red;error


//类
class Animal {
    feet: number;
    constructor(name: string, numFeet: number){}
}
class Size {
    feet: number;
    constructor(numFeet: number){}
}
let a: Animal;
let b: Size;
a = s;
s = a;

interface NotEmpty<T> {
    data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;

x = y;  // Error, because x and y are not compatible

