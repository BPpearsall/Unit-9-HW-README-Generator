const inquirer = require('inquirer');
const fs = require("fs")

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
            choices: ['mit', 'html', 'css']
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
    .then(answer => {
        
        fs.writeFile("README.md", `# Title: ${answer.title}\n\n * Languages: ${answer.description}\n\n * Preferred Communication: ${answer.installInstructions}\n\n`, (err) =>
            err ? console.log(err) : console.log('Success!') 
            )
        
    }) 

  
    