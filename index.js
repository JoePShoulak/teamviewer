import inquirer from "inquirer";

import {readFileSync, writeFileSync} from "fs";

import Intern from "./lib/Intern.js";
import Engineer from "./lib/Engineer.js";
import Manager from "./lib/Manager.js";

import questions from "./lib/questions.js"

// Broken out for future improvement
async function getAnswers(questions) {
    return await inquirer.prompt(questions);
}

// Get all the employees to be rendered
async function getEmployees() {
    let employees = [];

    let newManager = await getAnswers(questions.manager);
    employees.append(new Manager(newManager));

    let choice;
    while (choice != "End") {
        switch (choice) {
            case "Add Engineer": 
                let newEngineer = await getAnswers(questions.engineer);
                employees.append(new Engineer(newEngineer));
                break;
            case "Add Intern":
                let newIntern = await getAnswers(questions.intern);
                employees.append(new Intern(newIntern));
                break;
            default:
                break;
        }
        
        choice = (await getAnswers(questions.loop)).choice;
    }

    return employees;
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
    const employees = getEmployees();
    generateWebpage(employees);
}

// Run the page
init();
