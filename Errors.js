// reference error
// console.log(a);
//trying to access value outside of the scope

function demo() {
    let a = 10;
}
console.log(a);
let output = demo();
console.log(output);