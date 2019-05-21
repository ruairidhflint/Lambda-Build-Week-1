let justinBio = "Born and raised in Paris, France, Justin studied computer science at University and embarked on a career of software development. Along with his fellow creators, his struggle with data management throughout his studies let him to Pintereach and the product you see today. When not craning his neck at code, he can be found walking his dogs and judging bad coffee."
let tommyBio = "Specialising in all things design, art and fanciful, Tommy spends his days disecting colour schemes, margins and typography. Nothing grinds his gears more than misplaced symmetry or ill matched colours. Can usually be found hiding his instant coffee from Justin."
let samirBio = "When your boards give you a perfect set of metadata, source code and keywording, Samir is the man to thank. Backend data management and optimisation keep him up at night and Big O is burnt into the back of his eye lids. Samir once held the world record for most Drake lyrics memorised. Losing out eventually to Drake himself."
const employees = [{name: "Justin Wellers", bio: justinBio, photo: "IMG/headshot1.jpg"},
{name: "Tommy Segura", bio: tommyBio, photo: "IMG/headshot3.jpg"}, {name: "Samir Syed", bio: samirBio, photo: "IMG/headshot2.jpeg"}];


const docLocation = document.querySelector('.about-container');
class EmployeeClass{
    constructor(employeeData){
        this.employeeData = employeeData;
        this.name = employeeData.name;
        this.bio = employeeData.bio;
        this.photo = employeeData.photo;

        this.createElements();
        this.appendChildren();
        this.assignContent();
        this.assignClasses();
      
        docLocation.appendChild(this.maindiv);
    }

    createElements(){
        this.maindiv = document.createElement('div');
        this.leftdiv = document.createElement('div');
        this.employeephoto = document.createElement('img');
        this.rightdiv = document.createElement('div');
        this.employeename = document.createElement('h2');
        this.employeebio = document.createElement('p');

    }

    appendChildren(){
        this.leftdiv.appendChild(this.employeephoto);
        this.rightdiv.appendChild(this.employeename)
        this.rightdiv.appendChild(this.employeebio)
        this.maindiv.appendChild(this.leftdiv);
        this.maindiv.appendChild(this.rightdiv);

    }

    assignContent(){
        this.employeename.textContent = this.name;
        this.employeebio.textContent = this.bio;
        this.employeephoto.src = this.photo;
    }

    assignClasses(){
        this.maindiv.classList.add("employee");
        this.rightdiv.classList.add('employee-right');
        this.leftdiv.classList.add('employee-left');
    }



}


let employeeData= employees.forEach(employee => new EmployeeClass(employee));


