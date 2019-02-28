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


