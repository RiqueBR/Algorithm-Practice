// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

return str.split('').reduce((rev, char) => char + rev, ''); 
}




module.exports = reverse;

function thirdReversedString(str){

// Split method is sepparating each letter from a string and returning an array
//  var splitString = str.split("");
// ["h", "e", "l", "l", "o"]


// Using the reverse() method to reverse the new created array
//  var reverseArray = splitString.reverse();
// ["o", "l", "l", "e", "h"]

// Using the join() method to join all elements of the array into a string
//  var joinArray = reverseArray.join("");
// "olleh"

    // return joinArray;
}




// function secondReversedString(str){
//    let reversed = '';

//     for (let ch of str) {
//         reversed = ch + reversed;
//     }

//     return reversed;

// }
 

    ////////// Short solution ////////// 
// function shortReverse(str){
//     return str.split('').reverse().join('')
// }