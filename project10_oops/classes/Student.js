import Person from "./Person.js";
export default class Student extends Person {
    // private field also it is a backing field cause of leading hifen ( _ ).
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
