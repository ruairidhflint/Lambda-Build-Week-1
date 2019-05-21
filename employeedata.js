const employees = [{name: "Justin", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", photo: "IMG/headshot1.jpg"},
{name: "Tommy", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", photo: "IMG/headshot2.jpeg"}];


const docLocation = document.querySelector('.about-container');
class EmployeeClass{
    constructor(employeeData){
        this.employeeData = employeeData;
        this.name = employeeData.name;
        this.bio = employeeData.bio;
        this.photo = employeeData.photo;
        
        this.maindiv = document.createElement('div');
        this.leftdiv = document.createElement('div');
        this.employeephoto = document.createElement('img');
        this.leftdiv.appendChild(this.employeephoto);
        this.rightdiv = document.createElement('div');
        this.employeename = document.createElement('h2');
        this.employeebio = document.createElement('p');
        this.rightdiv.appendChild(this.employeename)
        this.rightdiv.appendChild(this.employeebio)
        
        this.maindiv.appendChild(this.leftdiv);
        this.maindiv.appendChild(this.rightdiv);

        this.employeename.textContent = this.name;
        this.employeebio.textContent = this.bio;
        this.employeephoto.src = this.photo;

        this.maindiv.classList.add("employee");
        this.rightdiv.classList.add('employee-right');
        this.leftdiv.classList.add('employee-left');

        docLocation.appendChild(this.maindiv);

        


    }
}


let employeesLive = employees.forEach(employee => new EmployeeClass(employee));


