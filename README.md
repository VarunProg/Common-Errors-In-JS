# Common Errors in JS
In the case of error the most important thing is to read the error message carefully to understand the error which kind of error we are getting.
# ReferenceError
How to we get reference error the most common use case is if we are trying to something that is not initilized in our code then we get Reference Error.\
Example:\
// reference error \
console.log(a);\
we are trying to access that is not defined in our code so we will get reference error\
 **Uncaught ReferenceError: a is not defined**\
 in the error message we can clearly see that it is telling us that a is not defined.
 
 **second use case**\
 if we try to access the value of variables we get reference error\
 example:\
 //trying to access value outside of the scope

function demo() {\
    let a = 10;\
}\
console.log(a);\
let output = demo();\
console.log(output);\
Ouput:\
Again we get the same error that a is not defiend Reference error\
why? because we are trying to access the the value of a outiside of the scope.\
**Uncaught ReferenceError: a is not defined**

 **third use case**\
 in the case of let and const declaration if try to access them before initialization.\
 Example:\
 consoloe.log(a);\
 let a=10;\
 output:\
 **Uncaught ReferenceError: Cannot access 'a' before initialization**
 \
 # SyntaxError
 if we use incorrect syntax of the predefined syntax we get syntax error.\
 suppose we forget to put curly braces after function declaration\
 
function a() \
console.log(" function a") \
}\
a();\
output:\
**Uncaught SyntaxError: Unexpected identifier**\
\
**second use case**\
if we try to re-decalared the variable with let variable\
let a=10;\
let a=100;\
console.log(a);\
**SyntaxError: Identifier 'a' has already been declared**\
if we see error message it is simply telling us that a is already declared we can not declare it once again with the same name.\
but in case of var we can assign the value to the same variable again it will not throw an error just it will update the value.\
Example:\
var a=10;\
var a=100;\
output: 100\
it just updated the value\

# TypeError\
TypeError occurs when operation is performed on wrong data type.\
Example:\
const a = 10;\
a = 100;\
console.log(a);\
output:**Uncaught TypeError: Assignment to constant variable.**\
we can not modify const declaration, it is type of constant if we try to modify then we get TypeError.\
const is more strict than let.


