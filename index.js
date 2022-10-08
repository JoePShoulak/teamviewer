import inquirer from "inquirer";

import {readFileSync, writeFileSync} from "fs";

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

    generateWebpage(employees);
}

function generateWebpage(employees) {
    let webpage = readFileSync("./src/team.html").toString();
    let cardTemplate = readFileSync("./src/card.html").toString();

    let cards = "";

    for (let employee of employees) {
        let card = cardTemplate;
        let role = employee.getRole();

        card = card.replace("ROLE", role);
        card = card.replace("NAME", employee.getName());
        card = card.replace("ID", `ID: ${employee.getID()}`);
        // TODO: Make email be a link
        card = card.replace("EMAIL", `Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>`);

        switch (role) {
            case "Manager":
                card = card.replace("SPECIAL", `Office Number: ${employee.officeNumber}`);
                break;
            case "Engineer":
                card = card.replace("SPECIAL", `GitHub Username: <a href="https://github.com/${employee.gh_username}" target="_blank">${employee.gh_username}</a>`);
                break;
            case "Intern":
                card = card.replace("SPECIAL", `School: ${employee.school}`);
                break;
        }

        cards += card;
    }

    webpage = webpage.replace("CARDS", cards)
    writeFileSync("./dist/team.html", webpage)
}

// When we run the page
function init() {
    getEmployees();
}

// Run the page
init();
