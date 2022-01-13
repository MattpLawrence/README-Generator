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
      name: "description",
    },
    {
      type: "input",
      message: "Please describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Please describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "Please describe your project.",
      name: "description",
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forgot your password already?!")
  );

createReadme = () => {
  fs.appendFile("newREADME.md", "Trial", function (err) {
    if (err) throw err;
    console.log("saved");
  });
};
