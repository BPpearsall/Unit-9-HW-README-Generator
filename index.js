const inquirer = require('inquirer');
const fs = require("fs")

const generateReadME = ({ title, description, installInstructions, usageInfo, contributionGuidelines, testInstructions, license, github, email }) =>
`# Title: ${title}
         * Languages: ${description}
         * Preferred Communication: ${installInstructions}
         * Usage Information within the project: ${usageInfo}
         * Contribution Guidelines for the project: ${contributionGuidelines}
         * Test Instructions for the project: ${testInstructions}
         * Licenses for this project: ${license}
         * GitHub Profile Link: https://github.com/${github}
         * Email Link: ${email}`;
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
    .then((answers) => {
        const mdPageContent = generateReadME(answers);
        fs.writeFile("README.md", mdPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!') 
            );      
    }) ;

  
    