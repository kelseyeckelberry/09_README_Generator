const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is your project's name?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project.",
      },
      {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
      },
      {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?",
      },
      {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
]);

const generateREADME = (answers) =>
`![badge](https://img.shields.io/badge/license-${answers.license}-blue)

# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command.
* ${answers.install}


## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribute}

## Tests
To run tests, run the following command.
* ${answers.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at [${answers.email}](${answers.email}). You can find more of my work at [${answers.github}](https://github.com/${answers.github}). 

`;

promptUser()
    .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.log(err));