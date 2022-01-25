'use strict'

alert("Welcome To HR Managment System");

function EmployeeInformation(employeeID, fullName, department, level) {
  this.employeeID = this.GenerateRandomNum;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  // this.salary = this.salary()*0.925;
  this.imagePath = `imgs/${this.fullName}.PNG`;
}

// EmployeeInformation.prototype.salary = function () {
//   if (this.level == "Senior") {
//     return Math.floor(Math.random() * (2000 - 1500)) + 1500;
//   } else if (this.level == "Mid-Senior") {
//     return Math.floor(Math.random() * (1500 - 1000)) + 1000;
//   } else if (this.level == "Junior") {
//     return Math.floor(Math.random() * (1000 - 500)) + 500;
//   }
// };

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
// let GenerateRandomNum 
EmployeeInformation.prototype.generateRandomNum = function() {
  return   Math.floor(Math.random()* (9000+999))
}
let newemployees = document.getElementById("newemployees")
newemployees.addEventListener("submit", submit)

function submit(event){
  event.preventDefault();
  console.log(newemployees)
  // let employeeID = event.target.employeeID.value;
  //  let fullName = event.target.fullName.value;
  // let department = event.target.department.value;
  // let level = event.target.level.checked;
  console.log(event.target.fullName.value)
  // let imagePath = event.target.imagePath.value;
}