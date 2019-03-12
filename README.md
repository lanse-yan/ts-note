# ts-note
Typescript学习笔记

## 准备
官方提供了两种安装方式
+ 通过npm 安装
+ 安装VS的ts插件，毕竟是微软的，支持肯定是比较好的，如果刚好是用VS可以尝试一下。

## 基本类型
Typescript支持Javascript的数据类型，并且还多了枚举类型.
+ boolean: 同Javascript
+ number: 同Javascript
+ string: 同Javascript，可以使用"/',``，个人偏好'
+ Array: 与Javascript有点区别, 有两种声明访问，这种声明数组的方式有点向Java靠近，Java里面声明ArrayList也是用<>表明存储的是什么类型的数据，只不过Typescript里把这个数组泛型。
    ``` Typescript
    let list: number[] = [1,2,3];
    let list1: Array<number> = [1,2,3];
    ```
+ 元组类型：弥补了array只能存储一种类型数据的缺陷。只不过初始化时数据的类型顺序要保持一致。在python中也有元组的概念，但用法完全不一样。可以越界访问。
    ``` Typescript
    let x: [string, number] = ['hello', 10]
    console.log(x[5].toString());
    ```
+ 枚举
像JAVA Python中都存在这种数据类型，Javascript里面没有。更像是给数值编号以便更语义化。不过枚举用的并不多目前。
    ``` Typescript
    enum Color {Red, Green, Blue}
    let c: Color = Color.Green;
    ```
    默认是从0开始编号，可以手动指定。
+ any
代表任意类型，一般用于用户输入或第三方代码库，数据类型不确定的情况下，为了使编译通过检查。
+ void
同Java中的void，一般用于没有返回值的函数返回值类型，代表没有任何类型。变量定义void，没有意义，只能是undefined或null
+ Null Undefined
+ Never
+ Object

### 类型断言
类似于其它编程语言中的类型转换
+ <>
    ``` Typescript
    let someValue: any = 'this is a string';
    let strLength: number = (<string>someValue).length
    ```
+ as
    ``` Typescript
    let someValue: any = 'this is a string';
    let strLength: number = (someValue as string).length
    ```
    在jsx中只能使用`as`

## 类型兼容性

Typescript里面的类型兼容是基于结构的，只要结构里面的成员类型是一致的就可以，不像Java等语言，是基于名字，除非一个类型是另一个类型的子类，或实现类，否则两个名称不同的类型是不兼容的。且在Typescript中，只需要右边的类型包含左侧的类型的成员也可以说是兼容的。如下例子只要Person包含Named的每个属性就可以。
``` Typescript
interface Named {
    name: string;
    // age: 12;error
}

class Person {
    name: string;
    age: 12
}

let p: Named = new Person();
```
### 两个函数的比较
比较两个函数的参数列表，左边函数参数列表要包含右边函数参数列表。注意这里的包含只判断参数类型，而不管参数名，因为Javascript里面函数的参数都是形参,注意些时判断参数类型是对应位子的。在相同顺序的参数类型不同即不兼容，而不管其它位置是否存在这种类型的参数。
``` Typescript
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
// let y = ( s: string， b: number,) => 0;error，相同位置没有保持一致类型。

y = x; //ok
x = y; //error
```
这么操作，是因为Javascript中函数的参数个数可以省略，比如高阶函数forEach中的callback定义是有三个参数的，但通常情况下我们只用到一到两个，这种时候参数多的兼容参数少的就很有必要了。

可选参数与剩余参数不参与比较，因为这对于函数来说是未知的，不确定的，无法比较。

### Enum
枚举类型之间是不兼容的。

### 类
类的比较与对象和接口的比较类似，只是类只比较实例成员，静态成员与构造函数除外。
``` Typescript
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
```
### 泛型
根据生成的泛型中的参数类型判断。
``` Typescript
interface NotEmpty<T> {
    data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;

x = y;  // Error, because x and y are not compatible
```

## 高级类型

### 交叉类型：T & U ,要兼容类型T和类型U，一般用于mixin

### 联合类型：T | U, 只要满足其中之一即可，如果一个变量是联合类型，则只能访问所有类型的共同成员，这个很好理解，因为不能确保最终返回的结果里面是否有这个成员，即存在出错的可能性。
+ 类型谓词
+ typeof类型保护
+ instance类型保护
+ identifier!:使用类型断言手动去除null和undefined

### 类型别名
可复杂的类型起个别名，以便引用，比如一个函数类型，其它一些高级类型，类型别名相较接口而言，并不新建一个名，并且不能extends implements

### 索引类型
索引类型操作符：keyof T, 结果为T上所有属性名的联合属性。
索引类型操作符：T[K]

### 映射类型
从旧类型中创建新类型， 以相同的规则转换旧类型里的每个属性。例如，每个属性都变为可选的，每个属性都变为只读的等。
