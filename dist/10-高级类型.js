function getSmallPet() {
    var pet;
    if (Math.random() > 0.5) {
        pet = {
            layEggs: function () { return console.log('eggs...'); },
            fly: function () { return console.log('fly...'); }
        };
    }
    else {
        pet = {
            layEggs: function () { return console.log('eggs...'); },
            swim: function () { return console.log('swim...'); }
        };
    }
    return pet;
}
var pet = getSmallPet();
// pet.fly();
pet.layEggs();
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
//类型谓词 paraName is Type:用户自定义的保护
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
//typeof类型保护
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
}
function getName(n) {
    if (typeof n === string) {
        return n;
    }
    else {
        return n();
    }
}
//索引类型:如获取对象的部分属性
function plunk(o, name) {
    return name.map(function (key) { return o[key]; });
}
function getProperty(o, name) {
    return o[name];
}
var person = {
    name: 'Nick',
    age: 35
};
console.log(plunk(person, ['name', 'age']));
console.log(getProperty(person, 'name'));
//# sourceMappingURL=10-高级类型.js.map