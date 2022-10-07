import Employee from "./Employee"

class Manager extends Employee {
    constructor(data) {
        super(data);

        this.officeNumber = data.OfficeNumber;
    }

    getOfficeNumber() { return this.officeNumber; }

    getRole() { return "Manager"; }
}

export default Manager;