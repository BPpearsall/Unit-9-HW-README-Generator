const inquirer = require('inquirer');
const fs = require("fs")

const generateReadME = ({ title, description, installInstructions, usageInfo, contributionGuidelines, testInstructions, license, github, email }) =>
`# Title: ${title}
![Generic badge](https://img.shields.io/badge/License-${license}-<COLOR>.svg)
## Description
${description}
# Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#test)
- [Questions](#questions)

<a href = "installation">

## Installation
</a>

${installInstructions}
<a href = "usage">

## Usage 
</a>

${usageInfo}
<a href = "license">

## License 
</a>
${license}

<a href = "contributions">

## Contribution
</a>
${contributionGuidelines}

<a href = "test">

## Test
</a>
${testInstructions}

<a href = "questions">

## Questions 
</a>

Go to my GitHub profile: https://github.com/${github}<br>
Contact me at: ${email}`;


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
        fs.writeFile("generatedREADME.md", mdPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!') 
            );      
    }) ;

  
    