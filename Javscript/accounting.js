"use strict";

let data = localStorage.getItem("Employee");
let parsObj = JSON.parse(data);
let adminNum = 0
let markNum = 0
let devNum = 0
let finNum = 0
let totalSalary = 0
let markSal = 0
let adminSal = 0
let devSal = 0
let finSal = 0
if (parsObj !== null) {
  let allemployees = parsObj;
  console.log(allemployees);

  for (let i = 0; i < allemployees.length; i++) {

    // totalSalary += parseInt(allemployees[i].Salary);

    if (allemployees[i].department === "aministration") {
        adminSal += parseInt(allemployees[i].salary)
      adminNum++;
    }

    if (allemployees[i].department === "marketing") {
        markSal += parseInt(allemployees[i].salary)

      markNum++;
    }
    if (allemployees[i].department === "development") {
        devSal += parseInt(allemployees[i].salary)
      devNum++;
    }
    if (allemployees[i].department === "Finance") {
        finSal += parseInt(allemployees[i].salary)
      finNum ++;
    }
  }
  totalSalary= adminSal+markSal+devSal+finSal
}

let totalEmployees =  markNum + finNum +devNum +adminNum;


function render (){
let section = document.getElementById("myTable")
section.style= 'align-self:center  '

let divTable = document.createElement('div')
section.appendChild(divTable)
divTable.style='margin: 10px; height:400px; width: 1000px; '
 
let table = document.createElement('table')
divTable.appendChild(table)
table.style= 'width: 100%; height: 100%; border: 1px solid black;text-align-last: left;'

let r1= document.createElement('tr')
table.appendChild(r1)
let h1 =document.createElement('th')
h1.textContent = 'Department'
r1.appendChild(h1)
let h2 =document.createElement('th')
h2.textContent = '# of employees'
r1.appendChild(h2)
let h3 =document.createElement('th')
h3.textContent = 'Total Salary'
r1.appendChild(h3)
let h4 =document.createElement('th')
h4.textContent = 'Average'
r1.appendChild(h4)


let r2= document.createElement('tr')
table.appendChild(r2)

let d12 = document.createElement('td')
r2.appendChild(d12)
d12.textContent= 'Administration'
let d22 = document.createElement('td')
r2.appendChild(d22)
d22.textContent= `${adminNum}`
let d32 = document.createElement('td')
r2.appendChild(d32)
d32.textContent= `${adminSal}`
let d42 = document.createElement('td')
r2.appendChild(d42)
d42.textContent=  `${(adminSal/adminNum)||0}`

let r3= document.createElement('tr')
table.appendChild(r3)

let d13 = document.createElement('td')
r3.appendChild(d13)
d13.textContent= 'Marketing'
let d23 = document.createElement('td')
r3.appendChild(d23)
d23.textContent= `${markNum}`
let d33 = document.createElement('td')
r3.appendChild(d33)
d33.textContent= `${markSal}`
let d43 = document.createElement('td')
r3.appendChild(d43)
d43.textContent=  `${(markSal/markNum)||0}`


let r4= document.createElement('tr')
table.appendChild(r4)

let d14 = document.createElement('td')
r4.appendChild(d14)
d14.textContent= 'Development'
let d24 = document.createElement('td')
r4.appendChild(d24)
d24.textContent= `${devNum}`
let d34 = document.createElement('td')
r4.appendChild(d34)
d34.textContent= `${devSal}`
let d44 = document.createElement('td')
r4.appendChild(d44)
d44.textContent=  `${(devSal/devNum)||0} `

let r5= document.createElement('tr')
table.appendChild(r5)
let d15 = document.createElement('td')
r5.appendChild(d15)
d13.textContent= 'Finance'
let d25 = document.createElement('td')
r5.appendChild(d25)
d23.textContent= `${finNum}`
let d35 = document.createElement('td')
r5.appendChild(d35)
d33.textContent= `${finSal}`
let d45 = document.createElement('td')
r5.appendChild(d45)
d43.textContent=  `${(finSal/finNum)||0}`

let r6= document.createElement('tr')
table.appendChild(r6)
let tf1 = document.createElement ('td')
r6.appendChild(tf1)
tf1.textContent="Total"
let tf2 = document.createElement ('td')
r6.appendChild(tf2)
tf2.textContent=`Total number of employes = ${totalEmployees}`
let tf3 = document.createElement ('td')
r6.appendChild(tf3)
tf3.textContent=`Total Salary for all departments = ${totalSalary}`
let tf4 = document.createElement ('td')
r6.appendChild(tf4)
tf4.textContent=`Average salary for all departments = ${(totalSalary/totalEmployees)||0}`
}
 render();
 