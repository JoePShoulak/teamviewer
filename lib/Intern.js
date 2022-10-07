import Employee from "./Employee.js"

class Intern extends Employee {
    constructor(data) {
        super(data);

        this.school = data.school;
    }

    getSchool() { return this.school; }

    getRole() { return "Intern"; }
}

export default Intern;