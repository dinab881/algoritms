// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
 return str.split('').every((char, i) => {
     return char === str[str.length - i - 1];
 })
}

module.exports = palindrome;

// --- My solution - not ideal because there is duplication in comparison (first el - last el; last el - first el)
// function palindrome(str) {
//     let isPalindrom = true;
//     for(let i = 0; i < str.length-1;  i++){
//         if(str[i] !== str[str.length-i-1]){
//             isPalindrom = false;
//             break;
//         }
//     }
//     return isPalindrom;
// }


// --- 1 solution

// function palindrome(str) {
//     const reversed = str
//         .split('')
//         .reverse()
//         .join('');
//     return str === reversed;
// }


// --- 2 solution - not ideal because there is duplication in comparison
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     })
// }



