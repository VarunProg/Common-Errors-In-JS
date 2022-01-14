# Common Errors in JS
In the case of error the most important thing is to read the error message carefully to understand the error which kind of error we are getting.
# Reference Error
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
