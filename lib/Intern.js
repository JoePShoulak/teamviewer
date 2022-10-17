import Employee from "./Employee.js"

class Intern extends Employee {
    constructor(data) {
        super(data);

        this.school = data.school;
    }

    getSchool = () => this.school

    getRole = () => "Intern"
}

export default Intern;