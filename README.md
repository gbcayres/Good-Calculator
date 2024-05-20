# A Good Calculator
Many JavaScript developers have as their very first project a simple calculator site like this one. I've waited to create one because i wanted to do something diferent.

While researching, I found numerous calculator projects of other beginner devs that used `eval()` with the value obtained by a input or text element. This can be imprecise due to issues with math precedence and dangerous because `eval()` attempts to execute JavaScript code represented by a string. If this string comes from external sources like user input, it creates vulnerabilities for code injection.

***

## What I've done a differently?
So, the main change I've made was separating the interface logic of the calculator maths logic itself. I've implemented a <a href="./js/calculator.mjs">Calculator module</a> trying to apply my basic understanding of Clean Code and SOLID principles.

### Clean Code
Clean Code principles emphasize the importance of writing code that is easy to read and understand. Like an author writing his book, it's your responsibility to make your ideas clear to the reader. Some basic practices include giving variables and functions an expressive name, formatting your code to create a good reading flow, keeping functions small and focused on only one single task ,ensuring they do it well, and maintaining a consistent code "style". That last one can be implemented just by using a formatter like Prettier.

### SOLID
I also tried to apply the Single Responsibility Principle which is the 'S' of the SOLID acronym. This principle says that any single object in object-oriented-programming should be made for one specific function. The way I've done this in this project was assigning the <a href="./js/index.js">index.js</a> file the responsibility of manipulating DOM to synchronize the interface with the current Calculator instance, while the <a href="./js/calculator.mjs">Calculator.mjs</a> file is responsible for the implementation of the Calculator class. This approach also helped me to apply the Open Closed Principle, the 'O' in SOLID, which means that a class should be open to extensions, but closed for modifications. The Calculator class works independently of the DOM manipulations, while index.js script extends its functionality by synchronizing it with a user interface.

### Single Math Operations
Instead of using `eval()` to execute a big mathematical expression, this Calculator executes one operation at a time. Ensuring correct results without precedence issues.

***

## Live Demo
Here is the link to test and use the <a href="https://gbcayres.github.io/Good-Calculator-App/">Good Calculator</a>
