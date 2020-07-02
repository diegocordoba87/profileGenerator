const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const initial = ()=> {
    inquirer.prompt([
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
        const newManager = new Manager(res.name,res.id,res.email,res.officeNumber);
        addMore()
    
      });
}


const addMore = ()=>{
    inquirer.prompt({
        type: "confirm",
        message: "Besides the manager, do you want to add more team members?",
        name: "addMore",
        default: true
    }).then((res)=>{
        if(res.addMore === true){
            empQuestions()
        }else{
            console.log("we will push your team members to an HTML file!")
        }
    })
}


const empQuestions = ()=>{
    inquirer
  .prompt({

    type: "list",
    message: "What type of employee do you want to create a profile for?",
    choices: ["Engineer", "Intern"],
    name: "role",
  })
  .then((answers) => {
    console.log(answers.role);
    if(answers.role === "Engineer") {
    {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is your Engineer's name?",
            name: "name",
          },
          {
            type: "input",
            message: "What is your Engineer's ID number",
            name: "id",
          },
          {
            type: "input",
            message: "What is your Engineer's email address?",
            name: "email",
          },
          {
            type: "input",
            message: "What is your Engineer's github?",
            name: "github",
          },
        ])
        .then((res) => {
          const newEngineer = new Engineer(
            res.name,
            res.id,
            res.email,
            res.github
          );
          addMore();
        });
    }
  } else if(answers.role === "Intern"){
    {
        inquirer.prompt([
         {
             type: "input",
             message: "What is your intern's name?",
             name: "name"
         },
         {
             type: "input",
             message: "What is your intern's ID number",
             name: "id"
         },
         {
             type: "input",
             message: "What is your intern's email address?",
             name: "email"
         },
         {
             type: "input",
             message: "What is your intern's school?",
             name: "github"
         }
        ]    
        ).then(res=>{
            const newIntern = new Intern(res.name, res.id, res.email, res.github)
            addMore();
        })
    }}
  });

}

initial()