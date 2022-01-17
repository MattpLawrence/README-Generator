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
    {
      type: "input",
      message: "What is your GitHub username",
      name: "username",
    },
    {
      type: "input",
      message: "What is your Email address",
      name: "email",
    },
  ])
  .then((response) => {
    populateReadme(response);
  });

populateReadme = (response) => {
  console.log(response);
  let tblContent = `## Table of Contents:\n`;
  let license = ` ${response.license} `;
  let questions = `## Questions: <a name="username"></a> \n\n`;
  const username = `${response.username}`;
  const email = `${response.email}`;
  //if dont add license is chosen, set to null length string
  if (response.license === "Dont Add License") {
    console.log("dont add license");
    license = "";
  }
  //check to see what license was chosen, then add badge
  let fullPopulate = ``;

  let setBadge = () => {
    if (response.license === "MIT") {
      fullPopulate +=
        "![MIT-Tag](https://shields.io/badge/license-MIT-green) \n\n";
    }
    if (response.license === "Apache") {
      fullPopulate +=
        "![Apache-Tag](https://shields.io/badge/license-Apache-blue) \n\n";
    }
    if (response.license === "GPL") {
      fullPopulate +=
        "![GPL-Tag](https://shields.io/badge/license-GPL-blue) \n\n";
    }
  };
  setBadge();

  let setQuestions = () => {
    if (!response.username && !response.email) {
      questions = ``;
    }
    if (response.username) {
      questions += `${username}`;
    }
    if (response.email) {
      questions += `${email}`;
    }
  };
  setQuestions();
  //Look for answers, and set table oc contents.
  let i = 1;
  let setTblContents = () => {
    if (response.install) {
      tblContent += `${i}. [Installation](#install) \n`;
      i++;
    }
    if (response.usage) {
      tblContent += `${i}. [Usage](#usage) \n`;
      i++;
    }
    if (response.license) {
      tblContent += `${i}. [License](#license) \n`;
      i++;
    }
    if (response.contribution) {
      tblContent += `${i}. [Contribution](#contribution) \n`;
      i++;
    }
    if (response.test) {
      tblContent += `${i}. [Test](#test) \n`;
      i++;
    }
  };
  setTblContents();
  //check for each attribute, and set to new value with text.
  const build = {
    ...(response.title && { title: `# Project Title: ${response.title}\n` }),
    ...(response.license && { setBadge: `${fullPopulate}` }),
    ...(response.description && {
      description: `## Description: \n${response.description}\n\n`,
    }),
    ...(response.motivation && {
      motivation: `### -Motivation: \n${response.motivation}\n\n`,
    }),
    ...(response.whyBuild && {
      whyBuild: `### -Why This Was Built: \n${response.whyBuild}\n\n`,
    }),
    ...(response.problemSolved && {
      problemSolved: `### -Problems Solved: \n${response.problemSolved}\n\n`,
    }),
    ...(response.learn && {
      learn: `### -What was Learned: \n${response.learn}\n\n`,
    }),
    ...(tblContent && { tblContent: `${tblContent}` }),
    ...(response.install && {
      install: `\n## Installation Instructions: <a name="install"></a> \n${response.install}\n\n`,
    }),
    ...(response.usage && {
      usage: `## How to Use: <a name="usage"></a> \n ${response.usage}\n\n`,
    }),
    ...(response.license && {
      license: `## License: <a name="license"></a> \n -This project is covered under the ${response.license} license.\n\n`,
    }),
    ...(response.contribution && {
      contribution: `## Contribution Guidelines: <a name="contribution"></a> \n ${response.contribution}\n\n`,
    }),
    ...(response.test && {
      test: `## How To Test: <a name="test"></a> \n ${response.test}\n\n`,
    }),
    ...(response.username && {
      username: `For questions see more at: \n [${response.username}](https://github.com/${response.username})\n\n`,
    }),
    ...(response.email && { email: `Or email me at: ${response.email}` }),
  };

  // build string out of the keys of the build
  let newString = ``;
  for (let key in build) {
    newString += build[key];
  }

  console.log(newString + "newString");
  createReadme(newString);
};

createReadme = (newString) => {
  fs.appendFile("newREADME.md", newString, function (err) {
    if (err) throw err;
    console.log("Saved");
  });
};
