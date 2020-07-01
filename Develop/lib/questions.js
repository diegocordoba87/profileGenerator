const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

inquirer
  .prompt({
    type: "list",
    message: "What type of employee do you want to create a profile for?",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  })
  .then((answers) => {
    console.log(answers.role);
    if (answers.role === "Manager") {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is your manager's name?",
            name: "name",
          },
          {
            type: "input",
            message: "What is your manager's ID number",
            name: "id",
          },
          {
            type: "input",
            message: "What is your manager's email address?",
            name: "email",
          },
          {
            type: "input",
            message: "What is your manager's office number?",
            name: "officeNumber",
          },
        ])
        .then((res) => {
          const newManager = new Manager(
            res.name,
            res.id,
            res.email,
            res.officeNumber
          );
          console.log(newManager);
        });
   
  });
