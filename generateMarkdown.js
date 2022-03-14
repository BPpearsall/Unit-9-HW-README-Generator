// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== undefined) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  } else {
    return ''
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== undefined) {
    return `https://opensource.org/licenses/${license}`
  } else {
    return ''
  }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== undefined) {
    return `## License 

    * This project is licensed under the ${license} license.`
  } else {
    return ''
  }
  console.log(license)
}
// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installInstructions, usageInfo, contributionGuidelines, testInstructions, license, github, email}) {
  license = license[0]
  console.log(license)
  return `# ${title}
  
${renderLicenseBadge(license)}

## Description

${description}

# Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- ${renderLicenseLink(license)}
- [Contributions](#contributions)
- [Tests](#test)
- [Questions](#questions)

<a href = "installation"></a>

## Installation


* ${installInstructions}
<a href = "usage"></a>

## Usage 


* ${usageInfo}

<a href = "license"></a>

${renderLicenseSection(license)}

<a href = "contribution"></a>

## Contribution

* ${contributionGuidelines}

<a href = "test"></a>

## Test

* ${testInstructions}

<a href = "questions"></a>

## Questions 


* Go to my GitHub profile: https://github.com/${github}

<br>

* Contact me at: ${email}`;
}

module.exports = generateMarkdown;
