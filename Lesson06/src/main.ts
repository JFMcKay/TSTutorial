class Coder {
    // if you use access modifiers in the constructor, it will automatically assign the property and you 
    // don't have to declare it above you also don't have to initialize it in the constructor 
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        // Is optional and has a default value
        protected lang: string = 'Typescript') {}
    code() {
        console.log(`${this.name} is coding`);
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}

const Dave = new Coder('Dave', 'Rock', 30);


class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        age: number,
        music: string,
    ) {
        super(name, music, age);
    }

    public getLang() {
        return `I'm a ${this.lang} developer`;
    }
}

const Sarah = new WebDev('Mac', 'Sarah', 25, 'Pop');

console.log(Sarah.getLang());

class JerBear extends WebDev {
    constructor(
        public computer: string,
        name: string,
        age: number,
        private funthing: string,
        music: string,
    ) {
        super(computer, name, age, music);
    }
    
    public get getFun() {
        return this.funthing;
    }

    public set setFun(funthing: string) {
        this.funthing = funthing;
    }

}

const Jeremy = new JerBear('Windows', 'Jeremy', 25, 'Coding', 'Rock');

Jeremy.setFun = 'Playing Video Games';

console.log(Jeremy.getFun);


/// Implementing Interfaces

interface Musician {
    name: string;
    instrument: string;
    // required method in future classes that implement this interface
    play(action: string): string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;
    constructor(
        name: string,
        instrument: string
    ) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action: string) {
        return `${this.name} is ${action} on ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy Page', 'Guitar');
console.log(Page.play('strumming'));

////////////////////////////////////////////////////

class Peeps {
    static count: number = 0;

    static getCount() {
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps('John');
const Jane = new Peeps('Jane');
const Joe = new Peeps('Joe');

console.log(John.id);
console.log(Jane.id);
console.log(Joe.id);
console.log(Peeps.getCount());

///////////////////////////////////////////////

class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(data: string[]) {
        this.dataState = data;
    }
}