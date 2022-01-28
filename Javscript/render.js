"use strict";

alert("Welcome To HR Managment System");

function EmployeeInformation(fullName, department, level, imagePath) {
  this.employeeID = this.generateRandomNum()
  this.fullName = fullName;
  this.department = department;
  this.level = level;

  this.salary = this.salaryGenerator() * 0.925;
  this.imagePath = imagePath || "https://via.placeholder.com/150" ;
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

EmployeeInformation.prototype.generateRandomNum = function () {
  return Math.floor(Math.random() * (9000 + 999));
};

let newemployees = document.getElementById("newemployees");
newemployees.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();
  // console.log(newemployees)

  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  console.log(event.target.fullName.value);
  let imagePath = event.target.imagePath.value;
  let newemployees = new EmployeeInformation(
    fullName,
    department,
    level,
    imagePath
  );
  newemployees.generateRandomNum();
  newemployees.render();
  console.log(newemployees);
  console.log(imagePath);
}
// fullName = fullName.toUpperCase(1).toLowerCase()+ fullName.Splice(1)

EmployeeInformation.prototype.render = function () {
  let mySection = document.getElementById("EmployeeInformation");
  mySection.style = "display: flex; flex-wrap: wrap";

  let card = document.createElement(`div`);
  mySection.appendChild(card);
  card.style =`
  padding: 15px;
  margin: 30px 15px;
  width: 230px;
  background-color: rgb(135, 252,10);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius :25px  `;
  let imgEl = document.createElement("img");
  card.appendChild(imgEl);

  imgEl.setAttribute("src", this.imagePath);

  imgEl.setAttribute("alt", this.fullName);
  imgEl.style = "width: 100px; height: 100px; border-radius: 50%; align-self: center";

  let divEmployee = document.createElement("div");
  card.appendChild(divEmployee);
  divEmployee.style = "text-align:center; padding: 10px";

  let h4Employee = document.createElement("h4");
  divEmployee.appendChild(h4Employee);
  h4Employee.style = `align-self:center`;
  h4Employee.textContent = "Name: " + this.fullName + "-ID" + this.employeeID;
  let h4department = document.createElement("h4");
  divEmployee.appendChild(h4department);
  h4department.textContent ="Department " + this.department + "-Level " + this.level;
  h4department.style = `display: flex; margin:0px 5px; flex-flow:wrap; align-self:center`;

  let h3Salary = document.createElement("h3");
  divEmployee.appendChild(h3Salary);
  h3Salary.textContent = this.salary;

};