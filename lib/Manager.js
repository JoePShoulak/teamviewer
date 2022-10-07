import Employee from "./Employee.js"

class Manager extends Employee {
    constructor(data) {
        super(data);

        this.officeNumber = data.officeNumber;
    }

    getOfficeNumber() { return this.officeNumber; }

    getRole() { return "Manager"; }
}

export default Manager;