const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "What is a description of your project?",
      },
      {
        type: "choices",
        name: "toc",
        message: "Would you like to include a Table of Contents?", choices: ["Yes", new inquirer.Separator(), "No"],
      },
]);

const generateREADME = (answers) =>
``;

promptUser()
    .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.log(err));