const Employee = require('./Employee')

class Enginneer extends Employee{
    constructor(name, id, email, github) {
      super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
  getGithub(){
      return this.github
  }
}

module.exports = Enginneer;