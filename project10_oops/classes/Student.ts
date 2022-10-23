import Person from "./Person.js";

export default class Student extends Person {
  // private field also it is a backing field cause of leading hifen ( _ ).
  private _name: string;

  constructor() {
    super();
    this._name = "";
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}
