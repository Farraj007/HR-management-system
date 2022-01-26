'use strict'

alert("Welcome To HR Managment System");

function EmployeeInformation( fullName, department, level) {
  this.employeeID = this.generateRandomNum();
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = this.salaryGenerator()*0.925;
  this.imagePath = `Java/imgs/${this.fullName}.jpg`;
}

EmployeeInformation.prototype.salaryGenerator = function () {
  if (this.level == "Senior") {
    return Math.floor(Math.random() * (2000 - 1500)) + 1500;
  } else if (this.level == "Mid-Senior") {
    return Math.floor(Math.random() * (1500 - 1000)) + 1000;
  } else if (this.level == "Junior") {
    return Math.floor(Math.random() * (1000 - 500)) + 500;
  }
};

// EmployeeInformation.prototype.render = function(){
//     document.write(`<h3>Name: ${this.fullName}</h3> `);
//     document.write(`<p> Salary: ${this.salary}</p> `);
// }


// let ghazi = new EmployeeInformation('1000', 'Ghazi Samer', 'Administration', 'Senior');
// let lana = new EmployeeInformation('1001', 'Lana Ali', 'Finance', 'Senior');
// let tamara = new EmployeeInformation('1002', 'Tamara Ayoub', 'Marketing', 'Senior');
// let safi = new EmployeeInformation('1003', 'Safi Walid', 'Administration', 'Mid-Senior');
// let omar = new EmployeeInformation('1004', 'Omar Zaid', 'Development', 'Senior');
// let rana = new EmployeeInformation('1005', 'Rana Saleh', 'Development', 'Junior');
// let Hadi = new EmployeeInformation('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior');
// const employeeArr= [ghazi,lana,tamara,safi,omar,rana,Hadi]
// for (let i= 0 ; i<7 ; i++){
//   employeeArr[i].render();
// }

EmployeeInformation.prototype.generateRandomNum = function() {
  return   Math.floor(Math.random()* (9000+999))
}

let newemployees = document.getElementById("newemployees")
newemployees.addEventListener("submit", submit)

function submit(event){
  event.preventDefault();
  // console.log(newemployees)

   let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  console.log(event.target.fullName.value)
  let imagePath = event.target.imagePath.value;
  let newemployees = new EmployeeInformation(fullName,department,level,imagePath);
  newemployees.generateRandomNum();
  newemployees.render();
  console.log(newemployees);
}
  // fullName = fullName.toUpperCase(1).toLowerCase()+ fullName.Splice(1)

 EmployeeInformation.prototype.render = function(){
  
  let mySection = document.getElementById('EmployeeInformation');

  let card =document.createElement(`div`)
  mySection.appendChild(card)
  card.style= 'padding: 15px; margin:10px; width: 170px; height: 1fr; background-color: #91C483; display: flex; align-items: center; flex-direction: column;'
 

  let divEmployee = document.createElement('div');
  mySection.appendChild(divEmployee);

  let h4Employee = document.createElement('h4');
  divEmployee.appendChild(h4Employee)
  h4Employee.textContent = 'Name:'+ this.fullName +'-ID'+this.employeeID
  let h4department = document.createElement('h4');
  divEmployee.appendChild(h4department)
  h4department.textContent= 'Department '+this.department +'-ID '+this.level
  let h3Salary =document.createElement('h3');
  divEmployee.appendChild(h3Salary)
  h3Salary.textContent= this.salary
  let imgEl = document.createElement('img');
  divEmployee.appendChild(imgEl);
  imgEl.setAttribute('src', this.imagePath)

  imgEl.setAttribute('alt',this.fullName);
}