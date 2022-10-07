import inquirer from "inquirer";
import Intern from "./lib/Intern.js";
import Engineer from "./lib/Engineer.js";
import Manager from "./lib/Manager.js";

import {loopQuestions, internQuestions, managerQuestions, engineerQuestions} from "./lib/questions.js"

console.log("\nEnter Manager Information:\n");

let employees = [];

function addEngineer(employees) {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            employees = [...employees, new Engineer(answers)];
        });

    return employees;
}

function addIntern(employees) {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            employees = [...employees, new Intern(answers)];
        })

    return employees;
}

function addNextEmployee(employees) {
    inquirer
    .prompt(loopQuestions)
    .then((answers) => {
        switch (answers.choice) {
            case "Add Engineer":
                // TODO: Figure out why this isn't working as expected
                addEngineer(employees);
                addNextEmployee(employees)
                break;
            case "Add Intern":
                addIntern(employees);
                addNextEmployee(employees)
                break;
            case "End":
                break;
        }
    })
}

inquirer
    .prompt(managerQuestions)
    .then((answers) => {
        employees = [...employees, new Manager(answers)];

        addNextEmployee(employees);
    });
