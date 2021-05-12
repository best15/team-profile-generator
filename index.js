const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require("inquirer");

const manager_questions = [
    {
        type: 'input',
        name: 'managername',
        message: 'Enter manager name: '

    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter manager employee_ID : '

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter manager Email address : '

    },
    {
        type: 'input',
        name: 'officenumber',
        message: 'Enter manager officenumber : '

    },

];

const engineer_questions = [
    {
        type: 'input',
        name: 'engineername',
        message: 'Enter engineer name: '

    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter engineer employee_ID : '

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter engineer Email address : '

    },
    {
        type: 'input',
        name: 'GithubUsername',
        message: 'Enter engineer github username : '

    },

];

const intern_questions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter engineer name: '

    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter intern employee_ID : '

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter intern Email address : '

    },
    {
        type: 'input',
        name: 'intern',
        message: 'Enter intern school name : '

    },

];

const showmenu = () => {
    const question = [
        {
            type: 'list',
            name: 'action',
            message: 'Do you want to add another Employee ?  ',
            choices: ["Engineer", "Intern", "No, finish building team."],
        }
    ]

    return inquirer.prompt(question);
}

inquirer.prompt(manager_questions).then((data) => {

    const emp_manager = new Manager(data.managername, data.id, data.email, data.officenumber);
    showmenu().then((answer) => {
        if (answer.action === 'Engineer') {
            inquirer.prompt(engineer_questions).then((data) => { });
        }
        else if (answer.action === 'Intern') {
            inquirer.prompt(intern_questions).then((data) => { });
        }
        else {

        }
    });




})

