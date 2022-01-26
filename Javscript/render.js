"use strict";

alert("Welcome To HR Managment System");

let id

function EmployeeInformation(employeeID,fullName, department, level, imagePath) {
  this.employeeID = generateRandomNum(employeeID);
  this.fullName = fullName;
  this.department = department;
  this.level = level;

  this.salary = 0;
  this.imagePath = imagePath || "https://via.placeholder.com/150" ;
  EmployeeInformation.allEmployees.push(this)
}
EmployeeInformation.allEmployees = []


EmployeeInformation.prototype.salaryGenerator = function () {
  if (this.level == "Senior") {
    return Math.floor(Math.random() * (2000 - 1500)) + 1500;
  } else if (this.level == "Mid-Senior") {
    return Math.floor(Math.random() * (1500 - 1000)) + 1000;
  } else if (this.level == "Junior") {
    return Math.floor(Math.random() * (1000 - 500)) + 500;
  }
  return this.salary * 0.925;
};

// EmployeeInformation.prototype.render = function(){
//     document.write(`<h3>Name: ${this.fullName}</h3> `);
//     document.write(`<p> Salary: ${this.salary}</p> `);
// }

let ghazi = new EmployeeInformation('1000', 'Ghazi Samer', 'Administration', 'Senior','imgs/Ghazi.jpg');
let lana = new EmployeeInformation('1001', 'Lana Ali', 'Finance', 'Senior',`imgs/Lana.jpg`);
let tamara = new EmployeeInformation('1002', 'Tamara Ayoub', 'Marketing', 'Senior','imgs/Tamara.jpg');
let safi = new EmployeeInformation('1003', 'Safi Walid', 'Administration', 'Mid-Senior','imgs/Safi.jpg');
let omar = new EmployeeInformation('1004', 'Omar Zaid', 'Development', 'Senior','imgs/Omar.jpg');
let rana = new EmployeeInformation('1005', 'Rana Saleh', 'Development', 'Junior','imgs/Rana.jpg');
let Hadi = new EmployeeInformation('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior','imgs/Hadi.jpg');
const employeeArr= [ghazi,lana,tamara,safi,omar,rana,Hadi]

 function generateRandomNum() {
 id = Math.floor(Math.random() * (9999 - 1000)+1000);
 
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
  generateRandomNum(id);
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
  margin: 50px 10px;
  width: 230px;
  background-color: rgb(135, 252,10);
  display: flex;
  align-items: center;
  flex-direction: column; `;

  let divEmployee = document.createElement("div");
  card.appendChild(divEmployee);
  divEmployee.style = "width: 170px; height: 170px; border-radius: 50%";

  let h4Employee = document.createElement("h4");
  divEmployee.appendChild(h4Employee);
  h4Employee.style = ``;
  h4Employee.textContent = "Name: " + this.fullName + "-ID" + this.employeeID;
  let h4department = document.createElement("h4");
  divEmployee.appendChild(h4department);
  h4department.textContent ="Department " + this.department + "-ID " + this.level;
  h4department.style = `display: flex; margin:5px; width:138px;`;

  let h3Salary = document.createElement("h3");
  divEmployee.appendChild(h3Salary);
  h3Salary.textContent = this.salary;
  h3Salary.style = `margin: 0px; display: flex; width:138px;`;
  let imgEl = document.createElement("img");
  divEmployee.appendChild(imgEl);

  imgEl.setAttribute("src", this.imagePath);

  imgEl.setAttribute("alt", this.fullName);
  imgEl.style = "width: 170px; height: 170px; border-radius: 50%";
};

for (let i= 0 ; i<7 ; i++){
  employeeArr[i].render();
}


console.log(EmployeeInformation.allEmployees)
function settingitem(){
  let data = JSON.stringify(EmployeeInformation.allEmployees);
  localStorage.setItem('employees',data);


}

function gettingitem() {
  let stringObj = localStorage.getItem('employees'); /// retrieve employees data from local storage
  let parsObj = JSON.parse(stringObj);
  if (parsObj !== null){
    EmployeeInformation.allEmployees = parsObj;
  }
  render();
}

gettingitem();