// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
      message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Please provide a table on contents for your ReadMe, if applicable',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project, if applicable',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for your project',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please select the license for your project'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributors, if applicable',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions, if applicable',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter links for further questions',
    },   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
