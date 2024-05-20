# A Good Calculator

<<<<<<< HEAD
Many JavaScript developers have as their very first project a simple calculator site as this one. I've waited create one because i wanted to do something diferent.

While researching, i found numerous calculator projects of other beginner devs that used `eval()` with the value obtained by a input or text element. This can be imprecise due to issues with math precedence and dangerous because `eval()` attempts to execute JavaScript code represented by a string. If this string comes from external sources like a user input, it creates vulnerabilities for code injection.

***

## What I've done a different way?
So, the main change I've made was separating the interface logic of the calculator maths logic itself. I've implemented a <a href="./js/calculator.mjs">Calculator module</a> trying to apply my basic Clean Code and SOLID principles understanding.

### Clean Code
Clean Code principles emphasizes the importance of writing code that is easy to read and understand. Like an author writing his book, It's your responsability to make your ideas clear to the reader. Some basic practices include giving variables and functions an expressive name, formatting your code creating a good reading flow, keeping functions small and focused in only one single task ensuring they do it well, and maintaining a consistent code "style", that last one can be implemented just by using a formatter like Prettier.

### SOLID
I also tried to apply the Single Responsability Principle which is the 'S' of the SOLID acronym. This principle says that any single object in object-oriented-programming should be made for one specific function. The way I've done this in this project was assigning the <a href="./js/index.js">index.js</a> file the responsability of manipulating DOM to syncronize the interface with the current Calculator instance. While the <a href="./js/calculator.mjs">Calculator.mjs</a> file is responsible for the implementation of the Calculator class. This approach also helped me to apply the Open Closed Principle, the 'O' in SOLID, which means that a class should be open to extensions, but closed for modifications. The Calculator class works independently of the DOM manipulations, while index.js script extends it functionality by syncronizing it with a user interface.

### Single Math Operations
Instead of using `eval()` to execute a big mathematical expression, this Calculator executes one operation by time. Ensuring correct results with out precedence issues.

***

## Live Demo
Here is the link to test and use the <a href="https://gbcayres.github.io/Calculator-App/">Good Calculator</a>
=======
Many JavaScript developers have as they very first project a simple calculator site as this one. I've waited to do it because i wanted to do something diferent.

While researching, i found numerous calculator projects of other beginner devs that used "eval()" with the value gotten by a input or text. It can be imprecise and dangerous because "eval()" just try to execute a javascript code represented by a string. Mainly if
>>>>>>> 73fa9bc6a5fbdfb99a8de2dbba744d8357b42962
