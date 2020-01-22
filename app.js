const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

function getManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email address?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the Manager's office number?"
        }
    ])
}

function getEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub username?"
        }
    ])
}

function getIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email address?"
        },
        {
            type: "input",
            name: "education",
            message: "Where did the Intern graduate from?"
        }
    ])
}

async function main() {
    const team = [];

    // Get manager info
    const manager = await getManager();
    team.push(new Manager(manager.name, manager.id, manager.email, manager.office));

    // Get engineer info
    const engineer = await getEngineer();
    team.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github));

    // Get intern info
    const intern = await getIntern();
    team.push(new Intern(intern.name, intern.id, intern.email, intern.education));

    // Generates html file based on prompt answers
    const html = generateHTML(team);
    await writeFileAsync("test.html", html);
}

main();
