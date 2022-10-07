import inquirer from "inquirer";
import Engineer from "./lib/Engineer.js";
import Manager from "./lib/Manager.js";

const employeeQuestions = [
    {
        "name": "name",
        "type": "input",
        "message": "Name:"
    },
    {
        "name": "id",
        "type": "input",
        "message": "ID:"
    },
    {
        "name": "email",
        "type": "input",
        "message": "Email:"
    },
];

const managerQuestions = [...employeeQuestions, {
    "name": "officeNumber",
    "type": "input",
    "message": "Office Number:"
}];

const engineerQuestions = [...employeeQuestions, {
    "name": "gh_username",
    "type": "input",
    "message": "GitHub Username:"
}];

const internQuestions = [...employeeQuestions, {
    "name": "school",
    "type": "input",
    "message": "School:"
}];

const loopQuestions = [{
    "name": "choice",
    "type": "list",
    "message": "Next:",
    "choices": [ "Add Engineer", "Add Intern", "End" ]
}]

console.log("\nEnter Manager Information:\n");

let employees = [];

inquirer
    .prompt(managerQuestions)
    .then((answers) => {
        employees = [...employees, new Manager(answers)];

        // TODO: Figure out how to get this working
        // let choice;
        // while (choice != "End"){

            inquirer
                .prompt(loopQuestions)
                .then(({choice}) => {
                    switch (choice) {
                        case "Add Engineer":
                            inquirer
                                .prompt(engineerQuestions)
                                .then((answers) => {
                                    employees = [...employees, new Engineer(answers)];
                                })
                            break;
                        case "Add Intern":
                            inquirer
                                .prompt(internQuestions)
                                .then((answers) => {
                                    employees = [...employees, new Intern(answers)];
                                })
                            break;
                        case "End":
                            // Generate the HTML and save the file
                            break;
                    }
                })

        // }

    });