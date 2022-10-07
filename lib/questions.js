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

export {employeeQuestions, managerQuestions, engineerQuestions, internQuestions, loopQuestions};