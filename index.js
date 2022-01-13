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
      name: "install",
    },
    {
      type: "input",
      message: "How do I use this project? (Enter usage instructions)",
      name: "usage",
    },
    {
      type: "list",
      message: "Please choose a license.",
      name: "license",
      choices: ["MIT", "Apache", "GPL"],
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "test",
    },
  ])
  .then((response) => {
    populateReadme(response);
  });

populateReadme = (response) => {
  console.log(response);
  console.log(response.test);
  const title = `# Project Title: ${response.title}`;
  const description = `## Description: \n -${response.description} `;
  const install = `## Installation Instructions: ${response.install}`;
  const

  let fullPopulate = `${title} \n\n ${description}`;
  createReadme(fullPopulate);
};

createReadme = (fullPopulate) => {
  fs.appendFile("newREADME.md", fullPopulate, function (err) {
    if (err) throw err;
    console.log("saved");
  });
};
