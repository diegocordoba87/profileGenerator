class Employee{
    constructor(name, id, email){
    // if (!name) {
    // throw new Error("You are missing the name.");
    // }
    // if (!id) {
    // throw new Error("You are missing the ID.");
    // }
    // if (!email) {
    // throw new Error("You are missing the email.");
    // }
    this.name = name;
    this.id= id;
    this.email = email;
    this.role = "Employee"
    }
    getName() {
        return this.name
      }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole(){
        return this.role
    }
}


module.exports = Employee;