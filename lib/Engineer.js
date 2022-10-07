import Employee from "./Employee"

class Engineer extends Employee {
    constructor(data) {
        super(data);

        this.gh_username = data.gh_username;
    }

    getGitHubUsername() { return this.gh_username; }

    getRole() { return "Engineer"; }
}

export default Engineer;