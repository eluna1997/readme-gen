const inquirer = require("inquirer");
const markdown = require("./markdown")
const fs = require("fs"); const fs = require("fs");
const path = require("path");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What's your GitHub username?"
  },{
    type: "input",
    name: "email",
    message: "What's your email?"
  },
  {
    type: "input",
    name: "title",
    message: "What's your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Descripe your project."
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "Do any dependencies need to be ran isntalled before running application?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be ran to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  }
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

init();
