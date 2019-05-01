// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    debugger;
     return str.split('').reduce((rev, char) =>
       char + rev
    , '');

}
reverse(' abcd');

module.exports = reverse;
//--- 1 solution

// function reverse(str){
//     return str
//         .split('')
//         .reverse()
//         .join('')
// }


//--- 2 solution
// function reverse(str) {
//     let reversed = '';
//
//     for(let character of str){
//         reversed = character + reversed;
//     }
//
//     return reversed;
//
// }


// ---3 solution
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, '');
//
// }