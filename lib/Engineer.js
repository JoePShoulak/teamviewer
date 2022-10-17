import Employee from "./Employee.js"

class Engineer extends Employee {
    constructor(data) {
        super(data);

        this.gh_username = data.gh_username;
    }

    getGitHubUsername = () => this.gh_username

    getRole = () => "Engineer"
}

export default Engineer;