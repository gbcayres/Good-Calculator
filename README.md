# A Good Calculator
Many JavaScript developers have as their very first project a simple calculator site like this one. I've waited to create one because i wanted to do something diferent.

While researching, I found numerous calculator projects of other beginner devs that used `eval()` with the value obtained by a input or text element. This can be imprecise due to issues with math precedence and dangerous because `eval()` attempts to execute JavaScript code represented by a string. If this string comes from external sources like user input, it creates vulnerabilities for code injection.

### What I've done differently?
The the main change I've made was separating the interface logic of the calculator maths logic itself. I've implemented a <a href="./js/calculator.mjs">Calculator module</a> to separate the responsibilities and achieve for good cohesion and low coupling.

## Live Demo
Here is the link to test and use the <a href="https://gbcayres.github.io/Good-Calculator/">Good Calculator</a>
