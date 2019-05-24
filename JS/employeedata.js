// Biographs seperated for clarity //

let justinBio = "Born and raised in Paris, France, Justin studied computer science at University and embarked on a career of software development. Along with his fellow creators, his struggle with data management throughout his studies let him to Pintereach and the product you see today. When not craning his neck at code, he can be found walking his dogs and judging bad coffee."
let tommyBio = "Specialising in all things design, art and fanciful, Tommy spends his days disecting colour schemes, margins and typography. Nothing grinds his gears more than misplaced symmetry or ill matched colours. Can usually be found hiding his instant coffee from Justin."
let samirBio = "When your boards give you a perfect set of metadata, source code and keywording, Samir is the man to thank. Backend data management and optimisation keep him up at night and Big O is burnt into the back of his eye lids. Samir once held the world record for most Drake lyrics memorised. Losing out eventually to Drake himself."
let roryBio = "An aspiring web designer who is currently working on front end development. Listens to too many podcasts and spends too much money"
let tanaBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
let jamesBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "

// Dataset of employees. Includes name, bio (above), photo url and whether or not to include on the site currently //

const employees1 = [{name: "Justin Wellers", bio: justinBio, photo: "IMG/headshot1.jpg", include: 'yes'},
{name: "Tommy Segura", bio: tommyBio, photo: "IMG/headshot3.jpg", include: 'yes'}, {name: "Samir Syed", bio: samirBio, photo: "IMG/headshot2.jpeg", include: "yes"},
 {name: 'Ruairidh Flint', bio: roryBio, photo: "IMG/headshot6.jpeg", include: "no"}, {name: "Tana Cho", bio: tanaBio, photo: "IMG/headshot5.jpg", include: "no"}, {name: "James Gordan", bio: jamesBio, photo: "IMG/headshot4.png", include: "no"} ];

 // filter through  dataset to only include those whose include value is "yes".//

let employees = employees1.filter(x => {
    return x.include == "yes";
})

// Create variable for the section whereby the emoployees will injected. Styling is already complete in the CSS.

const docLocation = document.querySelector('.about-container');

// Create new class that creates all the necessary DIVs and headings/paragraphs etc, adds the relevant content and attaches.


class EmployeeClass{
    constructor(employeeData){
        //extract data//

        this.employeeData = employeeData;
        this.name = employeeData.name;
        this.bio = employeeData.bio;
        this.photo = employeeData.photo;

        //call functions//

        this.createElements();
        this.appendChildren();
        this.assignContent();
        this.assignClasses();
      
        docLocation.appendChild(this.maindiv);
    }
   //function to create all the necessary elements//
    createElements(){
        this.maindiv = document.createElement('div');
        this.leftdiv = document.createElement('div');
        this.employeephoto = document.createElement('img');
        this.rightdiv = document.createElement('div');
        this.employeename = document.createElement('h2');
        this.employeebio = document.createElement('p');
    }
     //function to append in the correct position//
    appendChildren(){
        this.leftdiv.appendChild(this.employeephoto);
        this.rightdiv.appendChild(this.employeename)
        this.rightdiv.appendChild(this.employeebio)
        this.maindiv.appendChild(this.leftdiv);
        this.maindiv.appendChild(this.rightdiv);
    }
     //function to inject content from dataset//
    assignContent(){
        this.employeename.textContent = this.name;
        this.employeebio.textContent = this.bio;
        this.employeephoto.src = this.photo;
    }
    //function to assign correct classes so the CSS works//
    assignClasses(){
        this.maindiv.classList.add("employee");
        this.rightdiv.classList.add('employee-right');
        this.leftdiv.classList.add('employee-left');
    }
}


// Push each employee from the employee array above, which has been filtered, through the class constructor.//

let employeeData= employees.forEach(employee => new EmployeeClass(employee));


