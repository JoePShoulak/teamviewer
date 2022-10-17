const questions = {

    employee: [
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
    ],

    manager: [...employee, {
        "name": "officeNumber",
        "type": "input",
        "message": "Office Number:"
    }],

    engineer: [...employee, {
        "name": "gh_username",
        "type": "input",
        "message": "GitHub Username:"
    }],

    intern: [...employee, {
        "name": "school",
        "type": "input",
        "message": "School:"
    }],

    loop: [{
        "name": "choice",
        "type": "list",
        "message": "Next:",
        "choices": [ "Add Engineer", "Add Intern", "End" ]
    }]

}

export default questions;