"use strict";

alert("Welcome To HR Managment System");

function EmployeeInformation(fullName, department, level, imagePath) {
  this.employeeID = this.generateRandomNum();
  this.fullName = fullName;
  this.department = department;
  this.level = level;

  this.salary = this.salaryGenerator()*0.925;
  this.imagePath = imagePath || "https://via.placeholder.com/150" ;
  EmployeeInformation.newemployees.push(this)
  console.log(EmployeeInformation.newemployees)

}
EmployeeInformation.newemployees = []

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

// let ghazi = new EmployeeInformation('1000', 'Ghazi Samer', 'Administration', 'Senior','imgs/Ghazi.jpg');
// let lana = new EmployeeInformation('1001', 'Lana Ali', 'Finance', 'Senior',`imgs/Lana.jpg`);
// let tamara = new EmployeeInformation('1002', 'Tamara Ayoub', 'Marketing', 'Senior','imgs/Tamara.jpg');
// let safi = new EmployeeInformation('1003', 'Safi Walid', 'Administration', 'Mid-Senior','imgs/Safi.jpg');
// let omar = new EmployeeInformation('1004', 'Omar Zaid', 'Development', 'Senior','imgs/Omar.jpg');
// let rana = new EmployeeInformation('1005', 'Rana Saleh', 'Development', 'Junior','imgs/Rana.jpg');
// let Hadi = new EmployeeInformation('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior','imgs/Hadi.jpg');
// const employeeArr= [ghazi,lana,tamara,safi,omar,rana,Hadi]

 EmployeeInformation.prototype.generateRandomNum= function () {
 return Math.floor(Math.random() * (9999 - 1000+1)+1000);
 
};


  // let fullName = event.target.fullName.value;
  // let department = event.target.department.value;
  // let level = event.target.level.value;
  // console.log(event.target.fullName.value);
  // let imagePath = event.target.imagePath.value;
  // let newemployees = new EmployeeInformation(
  //   fullName,
  //   department,
  //   level,
  //   imagePath
  // );
  // generateRandomNum(id);
  // newemployees.render();
  // console.log(newemployees);
  // console.log(imagePath);
// }
// fullName = fullName.toUpperCase(1).toLowerCase()+ fullName.Splice(1)

function render(){
  let mySection = document.getElementById("EmployeeInformation");
  mySection.style = "display: flex; flex-wrap: wrap";
  mySection.innerText=''
  for (let i=0 ; i < EmployeeInformation.newemployees.length; i++){
  let emp= EmployeeInformation.newemployees[i]
  let card = document.createElement(`div`);
  mySection.appendChild(card);
  card.style =`
  padding: 15px;
  margin: 50px 10px;
  width: 230px;
  background-color: rgb(135, 252,10);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius :25px  `;
  let imgEl = document.createElement("img");
  card.appendChild(imgEl);

  imgEl.setAttribute("src", emp.imagePath);

  imgEl.setAttribute("alt", emp.fullName);
  imgEl.style = "width: 100px; height: 100px; border-radius: 50%; align-self: center";

  let divEmployee = document.createElement("div");
  card.appendChild(divEmployee);
  divEmployee.style = "width: 170px; height: 170px; border-radius: 50%";

  let h4Employee = document.createElement("h4");
  divEmployee.appendChild(h4Employee);
  h4Employee.style = `align-self:center`;
  h4Employee.textContent = "Name: " + emp.fullName + "-ID" + emp.employeeID;
  let h4department = document.createElement("h4");
  divEmployee.appendChild(h4department);
  h4department.textContent ="Department " + emp.department + "-Level " + emp.level;
  h4department.style = `display: flex; margin:0px 5px; flex-flow:wrap; align-self:center`;

  let h3Salary = document.createElement("h3");
  divEmployee.appendChild(h3Salary);
  h3Salary.textContent = emp.salary;
  console.log(emp)
  }
  
};

// console.log(EmployeeInformation.newemployees)

let newemployees = document.getElementById("newemployees");
newemployees.addEventListener("submit", submit);


function submit(event) {
  event.preventDefault();
  // console.log(newemployees)

  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  // console.log(event.target.fullName.value);
  let imagePath = event.target.imagePath.value;
  let newemployees = new EmployeeInformation (fullName,department,level,imagePath);
  // newemployees.generateRandomNum()
  // newemployees.salaryGenerator()
  render();
  settingItem();
 
}
render();

function settingItem(){
  let data = JSON.stringify(EmployeeInformation.newemployees);// convert the data to JSON format 
  localStorage.setItem('Employee',data)


}


function gettingItem(){
  let savedData = localStorage.getItem('Employee');
  // console.log(stringObj);
  let parsObj = JSON.parse(savedData);
  // console.log(parsObj);
  if (parsObj !== null){
    EmployeeInformation.newemployees = parsObj
  }

  render();
  
}

gettingItem()
