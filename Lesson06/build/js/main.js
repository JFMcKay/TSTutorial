"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    code() {
        console.log(`${this.name} is coding`);
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 30);
class WebDev extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I'm a ${this.lang} developer`;
    }
}
const Sarah = new WebDev('Mac', 'Sarah', 25, 'Pop');
console.log(Sarah.getLang());
class JerBear extends WebDev {
    constructor(computer, name, age, funthing, music) {
        super(computer, name, age, music);
        this.computer = computer;
        this.funthing = funthing;
    }
    get getFun() {
        return this.funthing;
    }
    set setFun(funthing) {
        this.funthing = funthing;
    }
}
const Jeremy = new JerBear('Windows', 'Jeremy', 25, 'Coding', 'Rock');
Jeremy.setFun = 'Playing Video Games';
console.log(Jeremy.getFun);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} on ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy Page', 'Guitar');
console.log(Page.play('strumming'));
////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Jane = new Peeps('Jane');
const Joe = new Peeps('Joe');
console.log(John.id);
console.log(Jane.id);
console.log(Joe.id);
console.log(Peeps.getCount());
///////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(data) {
        this.dataState = data;
    }
}
