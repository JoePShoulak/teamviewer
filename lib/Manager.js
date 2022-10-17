import Employee from "./Employee.js"

class Manager extends Employee {
    constructor(data) {
        super(data);

        this.officeNumber = data.officeNumber;
    }

    getOfficeNumber = () => this.officeNumber
    
    getRole = () => "Manager"
}

export default Manager;