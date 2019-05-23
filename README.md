# Pintereach - User Build Week 1 - Ruairidh Flint

I was given the following brief to design the basic aesthetic site layout and landing pages:

" As a researcher, it's difficult to keep track of articles you want to read later. Pintereach helps you research by enabling you to save and organize articles in to categories to read later. "

My initial research led me to both Pocket, Evernote and Pinterest, all somewwhat simular products. Using
the former two sites as inspiration for my basic design I set about to achieve the following goals:

* Create an aestheticly pleasing and modern desktop site for Pintereach.
* The site must be responsive and have an excellent mobile version.
* Multiple attractive pages including a log in form and a sign up form.

My stretch goals would be:

* To implement Javascript in such a way that content is injected from a data set
* Some sort of Javascript affecting the log in form
* Fully responsive at all sizes. 


## Technologies Used 

1.) HTML5 was used as the primary structure.
2.) CSS3 was used for the main styling.
3.) LESS was used to write the styling which was then compiled to CSS.
4.) Javascript was used for various functionality. 

--------------------------------------------------------------------------------------------------------------

The final link to the project is : [Link](https://ruairidhflint.github.io/Lambda-Build-Week-1/index.html)

I have achieved what I have set out to, creating an aesthetically pleasing landing page and extra pages for 
the fictional site.

Some notable features included:

1.) on desktop if you click the log in button, javascript has been used to display a floating log in box.
if you click on the sign up button, it closes the box and scrolls to the bottom where there is a sign up form.
2.) I had problems with the floating log in box at different sizes so if you resize the window with it open,
javascript has been used to immediately close it. 
3.) After about 800px a breakpoint kicks in which replaces the log in button with an identical one that links
you to a seperate mobile log in page.


4.) The about me page has minimal HTML. All the images and bios for the employees are created in Javascript and 
appeneded to the document. I have a dataset with the employee info that is easily updated without having to 
worry about any HTML. A filter method is used to choose which employees are included on the site, a for each
method pushes the chosen employees through a class constructor which creates all the relevant parts and content
and appends to the HTML document.

5.) The sign up form at the bottom is both responsive and pseudo-useable. If you input an e-mail and a password 
and click submit, the data is sent to the console log. In the real world this would be dealt with using other
technologies but for this example I have created a way to show I am able to extract the data. Once submitted,
the submit form disappears and displays a thank you message. 

------------------------------------------------------------------------------------------------------------------------