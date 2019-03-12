interface Bird {
    fly():void;
    layEggs():void;
}
interface Fish {
    swim():void;
    layEggs():void;
}

function getSmallPet(): Fish | Bird {
    let pet: Fish | Bird;
    if(Math.random()>0.5){
        pet = {
            layEggs: () => console.log('eggs...'),
            fly: () => console.log('fly...')
        }
    }else{
        pet = {
            layEggs: () => console.log('eggs...'),
            swim: () => console.log('swim...')
        }
    }
    return pet;
}
let pet = getSmallPet();
// pet.fly();
pet.layEggs();

if((<Fish>pet).swim){
    (<Fish>pet).swim();
}else{
    (<Bird>pet).fly();
}

//类型谓词 paraName is Type:用户自定义的保护
function isFish(pet: Fish | Bird): pet is Fish{
    return (<Fish>pet).swim !== undefined;
}

if(isFish(pet)){
    pet.swim();
}else{
    pet.fly();
}

//typeof类型保护
function isNumber(x: any): x is number{
    return typeof x === 'number';
}

function isString(x: any): x is string{
    return typeof x === 'string';
}

function padLeft(value: string, padding: string|number){
    if(isNumber(padding)){
        return Array(padding+1).join(' ') + value;
    }
    if(isString(padding)){
        return padding + value;
    }
}

//instance类型保护

//如果编译器不能够去除 null或 undefined，
//你可以使用类型断言手动去除。 语法是添加 !后缀： identifier!从 identifier的类型里去除了 null和 undefined

//类型别名
// type Name = string;
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;

function getName(n: NameOrResolver): string{
    if(typeof n === string){
        return n;
    }else{
        return n();
    }
}

//对象字面量类型
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

//索引类型:如获取对象的部分属性
function plunk<T, K extends keyof T>(o: T, name: K[]): T[K][]{
    return name.map(key => o[key]);
}

function getProperty<T, K extends keyof T>(o: T, name: K): T[K]{
    return o[name];
}

interface Person1 {
    name: string;
    age: number;
}
let person: Person1 = {
    name: 'Nick',
    age: 35
}
console.log(plunk(person, ['name', 'age']));
console.log(getProperty(person, 'name'));

type Readonly<T> = {
    readonly [P in keyof T]: T[P] 
}
type Partial<T> = {
    [P in keyof T]?: T[P]
}

type PersonReadonly = Readonly<Person1>;
type PersonPartial = Partial<Person1>;

type Nullable<T> = {
    [P in keyof T]: T[P] | null
}

type PartialPerson<T> = {
    [P in keyof T]?: T[P]
}