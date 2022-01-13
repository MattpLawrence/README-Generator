const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of this project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please describe this project. (Enter project description)",
      name: "description",
    },
    {
      type: "input",
      message:
        "How do I install this project? (Enter installation instructions)",
      name: "installInstructions",
    },
    {
      type: "input",
      message: "How do I use this project? (Enter usage instructions)",
      name: "usageInstructions",
    },
    {
      type: "list",
      message: "Please choose a license.",
      name: "license",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "description",
    },
  ])
  .then((response) => console.log(response));

createReadme = () => {
  fs.appendFile("newREADME.md", "Trial", function (err) {
    if (err) throw err;
    console.log("saved");
  });
};
