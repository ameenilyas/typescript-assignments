import BankAccount from "./BankAccount.js";

interface BankAccountInterface {
  first_name: string;
  last_name: string;
  gender: string;
  age: number;
  mobile_number: string;
  //   bank_acount: BankAccount;
}

export default class Customer
  extends BankAccount
  implements BankAccountInterface
{
  first_name: string;
  last_name: string;
  gender: string;
  age: number;
  mobile_number: string;
  //   bank_acount: BankAccount;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    mobile_number: string
  ) {
    super();

    this.first_name = firstName;
    this.last_name = lastName;
    this.gender = gender;
    this.age = age;
    this.mobile_number = mobile_number;
  }
}
