//*? ********SPLIT-REVERSE-JOIN********//
function reverseString(str) {
  let splitted = str.split("");
  let reversed = splitted.reverse();
  let joined = reversed.join("");
  return joined;
}
let str = prompt("Please enter a text to reverse.: ");
alert(`Your text has been reversed: ${reverseString(str)}`);

//*? *********ONE-LINE-COMBO************//
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// let str = prompt("Please enter a text to reverse.: ");
// alert(`Your text has been reversed: ${reverseString(str)}`);

//*? *********FOR-LOOP-CONCAT******//
// function reverseString(str) {
//   let reversed = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// let str = prompt("Please enter a text to reverse.: ");
// alert(`Your text has been reversed: ${reverseString(str)}`);

// //*? *************RECURSION-METHOD***********//
// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseString(str.substr(1)) + str.charAt(0);
//   }
// }
// let str = prompt("Please enter a text to reverse.: ");
// alert(`Your text has been reversed: ${reverseString(str)}`);
