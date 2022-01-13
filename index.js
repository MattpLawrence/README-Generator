const inquirer = require("inquirer");
const fs = require("fs");
const { forEach } = require("lodash");
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
      message: "What was you motivation to do this project?",
      name: "motivation",
    },
    {
      type: "input",
      message: "Why did you build this project?",
      name: "whyBuild",
    },
    {
      type: "input",
      message: "What problems did you solve in this project?",
      name: "problemSolved",
    },
    {
      type: "input",
      message: "What did you learn while doing this project?",
      name: "learn",
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
  const motivation = `###-Motivation: \n${response.motivation}`;
  const whyBuild = `###-Why This Was Built: \n${response.whyBuild}`;
  const problemSolved = `###-Problems Solved: \n${response.problemSolved}`;
  const learn = `###-What was Learned: \n${response.learn}`;
  const install = `## Installation Instructions: \n${response.install}`;
  const usage = `## How to Use: \n ${response.usage}`;
  const license = `## License: \n ${response.license}`;
  const contribution = `## Contribution Guidelines: \n ${response.contribution}`;
  const test = `## How To Test: \n ${response.test}`;

  //loop to check if everything was entered, and exclude blank entries.
  for (let property in response) {
    console.log(response[property]);
    if (response[property]) {
      console.log("yes" + response[property]);
    }
  }

  let fullPopulate = `${title}\n\n${description}\n\n${motivation}\n${whyBuild}\n${problemSolved}\n${learn}\n\n${install}\n\n${usage}\n\n${license}\n\n${contribution} \n\n${test}`;
  createReadme(fullPopulate);
};

createReadme = (fullPopulate) => {
  fs.appendFile("newREADME.md", fullPopulate, function (err) {
    if (err) throw err;
    console.log("Saved");
  });
};
