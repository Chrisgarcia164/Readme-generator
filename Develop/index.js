// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information about your project: ',
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: 'Contribution guidelines: ',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'Test instructions: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please choose a license: ',
        name: 'license',
        choices: [
            {
                name: 'MIT',
            },
            {
                name: 'Babel',
            },
            {
                name: 'Rails',
            },
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email'
    }
  ])
  .then((response) => {
      console.log(response),
      fs.writeFile("README.md", 
      `
# ${response.title} 
- [Description](#description)
- [Installlation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test instructions](#test-instructions)
- [Questions](#questions)

# Licensed by ${response.license}

## Table of contents:

## Description:
${response.description}

## Installation instructions:
${response.installation}

## Usage information:
${response.usageInfo}

## Contribution Guidelines:
${response.guidelines}

## Test instructions:
${response.test}

## Questions: 
* Email: ${response.email}
* GitHub: https://github.com/${response.github}
      `
      ,
       function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("commit logged");
    });
  })



// TODO: Create a function to write README file
function writeToFile(README, response) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
