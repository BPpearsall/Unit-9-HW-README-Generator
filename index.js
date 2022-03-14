// linked js and inquirer
const inquirer = require('inquirer');
const fs = require("fs")
const generateMarkdown = require('./generateMarkdown')

// function from generateMarkdown that runs the code with data taken from inquirer
function writeToFile(data) {
    fs.writeFile("generatedREADME.md", data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!') 
    );
}

// questions for node inquirer to ask
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description for this project'
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'What are the install instructions for this project?'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'what is the usage information for this project?'
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'What are the contribution guidelines for this project?'
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'What are the testing instructions for this project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses were used during this project?',
            choices: ['MIT', 'ISC', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address to contact with?'
        }
    ])
    // stores data
    .then((data) => {
        const mdPageContent = generateMarkdown(data);
        writeToFile(mdPageContent)
              
    }) ;
}
 init()
  
    