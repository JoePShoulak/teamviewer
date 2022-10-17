class Employee {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
    }

    getName = () => this.name

    getID = () => this.id

    getEmail = () => this.email

    getRole = () => "Employee"
}

export default Employee;