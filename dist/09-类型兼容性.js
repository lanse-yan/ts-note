var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//如果Nameed,Person两个中存在不一致的则会报错,此时只需要右边的类型包含左侧的类型
//的成员
var p = new Person();
//比较两个函数
var fun1 = function (a) { return 0; };
var fun2 = function (b, s) { return 0; };
fun2 = fun1; //ok
// x = y; //error
//枚举类型
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var status = Status.Ready;
// status = Color.Red;error
//类
var Animal = /** @class */ (function () {
    function Animal(name, numFeet) {
    }
    return Animal;
}());
var Size = /** @class */ (function () {
    function Size(numFeet) {
    }
    return Size;
}());
var a;
var b;
a = s;
s = a;
var x;
var y;
x = y; // Error, because x and y are not compatible
//# sourceMappingURL=09-类型兼容性.js.map