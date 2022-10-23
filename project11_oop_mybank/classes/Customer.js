import BankAccount from "./BankAccount.js";
export default class Customer extends BankAccount {
    first_name;
    last_name;
    gender;
    age;
    mobile_number;
    //   bank_acount: BankAccount;
    constructor(firstName, lastName, gender, age, mobile_number) {
        super();
        this.first_name = firstName;
        this.last_name = lastName;
        this.gender = gender;
        this.age = age;
        this.mobile_number = mobile_number;
    }
}
