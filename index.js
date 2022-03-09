const inquirer = require('inquirer')
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
            name: 'install-instructions',
            message: 'What are the install instructions for this project?'
        },
        {
            type: 'input',
            name: 'usage-info',
            message: 'what is the usage information for this project?'
        },
        {
            type: 'input',
            name: 'contribution-guidelines',
            message: 'What are the contribution guidelines for this project?'
        },
        {
            type: 'input',
            name: 'test-instructions',
            message: 'What are the testing instructions for this project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses were used during this project?'
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
        },
    ])
    .then(answer => {
        console.log(answer);
        const fileName = `${answer.name.toLowerCase().split(' ').join('')}.json`
        console.log(fileName)

        fs.writeFile(fileName, JSON.stringify(answer, null, 2), (err) => {
            err ? console.log(err) : console.log("success")
        })
    })