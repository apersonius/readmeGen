// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description of your project'
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Enter a Table of Contents (if applicable) for your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions for your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage for your project'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter any licenses for your project'
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Enter any contributers for this project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter any tests for this project'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Contact me with any further questions on github or via email'
        },
        
    ])
    .then((data) => {
        const filename = `readme`;


// TODO: Create a function to write README file
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      })
];


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
