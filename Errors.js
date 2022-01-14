// reference error
// console.log(a);
//trying to access value outside of the scope

function demo() {
    let a = 10;
}
console.log(a);
let output = demo();
console.log(output);

// let and const declaration reference error
console.log(a);
let a = 10;


//syntax error
function a()
console.log(" function a")
}
a();
// can't modify const declaration
const a = 10;
a = 100;
console.log(a);
