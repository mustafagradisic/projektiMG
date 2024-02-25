
function findHigherNumber(x, y) {
<<<<<<< HEAD

    let higherNumber;
  
  
=======
    let higherNumber;
>>>>>>> 5fd23160257423c5825072417d0f9ff4605a7911
    for (let i = 0; i < 100; i++) {
        if (x > y) {
            higherNumber = x;
        } else if (y > x) {
            higherNumber = y;
        } else {
            higherNumber = "Both numbers are equal";
<<<<<<< HEAD
        }

=======
      }
>>>>>>> 5fd23160257423c5825072417d0f9ff4605a7911
    }
    return higherNumber;
}
let x = 10;
let y = 7;
let result = findHigherNumber(x, y);
console.log(`Between ${x} and ${y}, the higher number is: ${result}`);




<<<<<<< HEAD
=======


>>>>>>> 5fd23160257423c5825072417d0f9ff4605a7911
function changeheading(){

let naslov= document.querySelector("h2");
let input = document.querySelector("input");

naslov.innerHTML = input.value
<<<<<<< HEAD
=======
 

naslov.style.color = ("red")


>>>>>>> 5fd23160257423c5825072417d0f9ff4605a7911
 

naslov.style.color = ("red")








}



