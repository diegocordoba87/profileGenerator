const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const employees = [];
const initial = ()=> {
    inquirer.prompt([
        {
          type: "input",
          message: "What is your manager's name?",
          name: "name",
          validate: function(answer){
            if(answer !== ""){
              return true;
            } 
            return "Enter a valid name" 
          }
        },
        {
          type: "input",
          message: "What is your manager's ID number",
          name: "id",
          validate: function(answer){
            const match = answer.match(
              /^[1-9]\d*$/)
            if(match){
              return true;
            } 
            return "Enter a valid number" 
          }
        },
        {
          type: "input",
          message: "What is your manager's email address?",
          name: "email",
          validate: function(answer){
            const match = answer.match(
              /\S+@\S+\.\S+/
            )
            if(match){
              return true;
            } 
            return "Enter a valid email" 
          }

        },
        {
          type: "input",
          message: "What is your manager's office number?",
          name: "officeNumber",
          validate: function(answer){
            const match = answer.match(
              /^[1-9]\d*$/)
            if(match){
              return true;
            } 
            return "Enter a valid number" 
          }
        },
      ])
      .then((res) => {
        const newManager = new Manager(res.name,res.id,res.email,res.officeNumber);
        employees.push(newManager);
        addMore()
    
      });
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
    if(answers.role === "Engineer") {
    {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is your Engineer's name?",
            name: "name",
            validate: function(answer){
              if(answer!==""){
                return true;
              }
              return "Enter a valid name"
            }
          },
          {
            type: "input",
            message: "What is your Engineer's ID number",
            name: "id",
            validate: function(answer){
              const match = answer.match(
                /^[1-9]\d*$/
              )
              if(match){
                return true
              }
              return "Enter a valid number"
            }
          },
          {
            type: "input",
            message: "What is your Engineer's email address?",
            name: "email",
            validate: function(answer){
              const match = answer.match(
                /\S+@\S+\.\S+/
              )
              if(match){
                return true
              }
              return "Enter a valid email"
            }
          },
          {
            type: "input",
            message: "What is your Engineer's github username?",
            name: "github",
            validate: function(answer){
              if(answer !==""){
                return true
              }
              else "Enter a valid username"
            }
          },
        ])
        .then((res) => {
          const newEngineer = new Engineer(res.name,res.id,res.email,res.github);
          employees.push(newEngineer);
          addMore();
        });
    }
  } else if(answers.role === "Intern"){
    {
        inquirer.prompt([
         {
             type: "input",
             message: "What is your intern's name?",
             name: "name",
             validate: function(answer){
               if(answer !==""){
                 return true
               }
               return "Enter a valid name"
             }
         },
         {
             type: "input",
             message: "What is your intern's ID number",
             name: "id",
             validate: function(answer){
               const match = answer.match(
                 /^[1-9]\d*$/
               )
               if(match){
                 return true
               }
               return "Enter a valid number"
             }
         },
         {
             type: "input",
             message: "What is your intern's email address?",
             name: "email",
             validate: function(answer){
               const match = answer.match(
                 /\S+@\S+\.\S+/              
               )
               if(match){
                 return true
               }
               return "Enter a valid email"
             }
         },
         {
             type: "input",
             message: "What is your intern's school?",
             name: "school",
             validate: function(answer){
               if(answer !== ""){
                 return true
               }
               return "Enter a valid school"
             }
         }
        ]    
        ).then(res=>{
            const newIntern = new Intern(res.name, res.id, res.email, res.school)
            employees.push(newIntern);
            addMore();
        })
    }}
  });

}
const addMore = ()=>{
    inquirer.prompt({
        type: "confirm",
        message: "Do you want to add more team members?",
        name: "addMore",
        default: true
    }).then((res)=>{
        if(res.addMore === true){
            empQuestions()
        }else{
            console.log("we will push your team members to an HTML file!")
            const renderedTeam= render(employees)
            fs.writeFile(outputPath,renderedTeam,function(err){
                if(err) throw err
            } )

        }
    })
}


initial()
