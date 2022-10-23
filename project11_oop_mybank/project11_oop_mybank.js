import Customer from "./classes/Customer.js";
class Program {
    _customers;
    constructor() {
        this._customers = [];
    }
    addCustomer(customer) {
        this._customers.push(customer);
    }
    getCustomers() {
        return this._customers;
    }
}
const program = new Program();
const customer_1 = new Customer("Ameen", "Ilyas", "male", 22, "03482278847");
const customer_2 = new Customer("Qadeer", "Ilyas", "male", 22, "03482278848");
program.addCustomer(customer_1);
program.addCustomer(customer_2);
console.log(program.getCustomers());
