const inquirer = require("inquirer");
const fs = require("fs");
const { forEach, includes } = require("lodash");
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
      choices: ["MIT", "Apache", "GPL", "Dont Add License"],
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
  const title = `# Project Title: ${response.title}\n\n`;
  const description = `## Description: \n ${response.description}\n\n`;
  const motivation = `### -Motivation: \n${response.motivation}\n`;
  const whyBuild = `### -Why This Was Built: \n${response.whyBuild}\n`;
  const problemSolved = `### -Problems Solved: \n${response.problemSolved}\n`;
  const learn = `### -What was Learned: \n${response.learn}\n\n`;
  const install = `## Installation Instructions: \n${response.install}\n\n`;
  const usage = `## How to Use: \n ${response.usage}\n\n`;
  let license = `## License: \n ${response.license}\n\n`;
  const contribution = `## Contribution Guidelines: \n ${response.contribution}\n\n`;
  const test = `## How To Test: \n ${response.test}`;
  //if dont add license is chosen, set to null length string
  if (response.license === "Dont Add License") {
    console.log("dont add license");
    license = "";
  }
  //set string to add content to readme
  let fullPopulate = ``;
  //loop through to add only the filled out answers to the readme
  if (response.title) {
    fullPopulate += title;
  }
  if (response.description) {
    fullPopulate += description;
  }
  if (response.motivation) {
    fullPopulate += motivation;
  }
  if (response.whyBuild) {
    fullPopulate += whyBuild;
  }
  if (response.problemSolved) {
    fullPopulate += problemSolved;
  }
  if (response.learn) {
    fullPopulate += learn;
  }
  if (response.install) {
    fullPopulate += install;
  }
  if (response.usage) {
    fullPopulate += usage;
  }
  if (response.license) {
    fullPopulate += license;
  }
  if (response.contribution) {
    fullPopulate += contribution;
  }
  if (response.test) {
    fullPopulate += test;
  }

  //loop to check if everything was entered, and exclude blank entries.
  // let fullPopulate = ``;
  // let attrList = [];
  // for (let property in response) {
  //   if (response[property]) {
  //     attrList.push(property);
  //     console.log(attrList);

  //   }
  // }
  // //set array to loop through
  // const fullAttrList = [
  //   title,
  //   description,
  //   motivation,
  //   whyBuild,
  //   problemSolved,
  //   learn,
  //   install,
  //   usage,
  //   license,
  //   contribution,
  //   test,
  // ];
  // for (let i = 0; i < fullAttrList.length; i++) {
  //   console.log(fullAttrList[i]);
  //   if (attrList.includes(fullAttrList[i])) {
  //     console.log("includes" + fullAttrList[i]);
  //   }
  // }

  // let fullPopulate = `${title}\n\n${description}\n\n${motivation}\n${whyBuild}\n${problemSolved}\n${learn}\n\n${install}\n\n${usage}\n\n${license}\n\n${contribution} \n\n${test}`;
  createReadme(fullPopulate);
};

createReadme = (fullPopulate) => {
  fs.appendFile("newREADME.md", fullPopulate, function (err) {
    if (err) throw err;
    console.log("Saved");
  });
};
