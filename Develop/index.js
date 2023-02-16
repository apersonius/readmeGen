// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        {
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            name: 'description',
            message: 'Enter a brief description of your project'
        },
        {
            name: 'tableOfContents',
            message: 'Enter a Table of Contents (if applicable) for your project'
        },
        {
            name: 'installation',
            message: 'Enter installation instructions for your project'
        },
        {
            name: 'usage',
            message: 'Enter the usage for your project'
        },
        {
            name: 'license',
            message: 'Enter any licenses for your project'
        },
        {
            name: 'contributers',
            message: 'Enter any contributers for this project'
        },
        {
            name: 'tests',
            message: 'Enter any tests for this project'
        },
        {
            name: 'questions',
            message: 'Enter any questions for this project'
        },
        
    ])
    .then(answers => {
        console.info('Answer:', answers);
    })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
