import inquirer from "inquirer";

import Intern from "./lib/Intern.js";
import Engineer from "./lib/Engineer.js";
import Manager from "./lib/Manager.js";

import {loopQuestions, internQuestions, managerQuestions, engineerQuestions} from "./lib/questions.js"

console.log("\nEnter Manager Information:");

// Broken out for future improvement
async function getAnswers(questions) {
    return await inquirer.prompt(questions);
}

// Get all the employees to be rendered
async function getEmployees() {
    let employees = [];

    let m = await getAnswers(managerQuestions);
    employees = [...employees, new Manager(m)];

    let choice;
    while (choice != "End") {
        if (choice == "Add Engineer") {
            let e = await getAnswers(engineerQuestions);
            employees = [...employees, new Engineer(e)];
        } else if (choice == "Add Intern") {
            let i = await getAnswers(internQuestions);
            employees = [...employees, new Intern(i)];
        }
        const selection = await getAnswers(loopQuestions);
        choice = selection.choice;
    }

    return employees;
}

// When we run the page
function init() {
    let employees = getEmployees();
}

// Run the page
init();
