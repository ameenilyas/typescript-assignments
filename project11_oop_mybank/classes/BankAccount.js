export default class BankAccount {
    account_balance;
    constructor() {
        this.account_balance = 100;
        console.log("Instantiated");
    }
    debit(amount) {
        let statement = "";
        if (this.account_balance) {
            if (amount) {
                if (this.account_balance > amount) {
                    this.account_balance = this.account_balance - amount;
                    statement = `Transaction successfull! new account balance is ${this.account_balance}`;
                }
                else {
                    statement = `You don't have enough money to do this transaction`;
                }
            }
            else {
                statement = "The amount you entered is wrong!";
            }
        }
        else {
            statement = "Sorry you have insufficient balance!";
        }
        return statement;
    }
    credit(amount) {
        let statement = "";
        if (amount > 0) {
            this.account_balance = this.account_balance + amount;
            if (this.account_balance > 100) {
                this.account_balance = this.account_balance - 1;
            }
            statement = `Your account has been credited successfully!`;
        }
        else {
            statement = `You don't have enough money to do this transaction`;
        }
        return statement;
    }
    getAccountBalance() {
        return this.account_balance;
    }
}
