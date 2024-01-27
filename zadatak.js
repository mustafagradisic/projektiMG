
function findHigherNumber(x, y) {
    let higherNumber;

 
    for (let i = 0; i < 100; i++) {
        if (x > y) {
            higherNumber = x;
        } else if (y > x) {
            higherNumber = y;
        } else {
            higherNumber = "Both numbers are equal";
        }
    }

    return higherNumber;
}
let x = 10;
let y = 7;
let result = findHigherNumber(x, y);



console.log(`Between ${x} and ${y}, the higher number is: ${result}`);


 



