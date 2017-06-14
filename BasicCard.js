
module.exports = BasicCard;
exports.BasicCard = function(question, answer){
    this.front = question;
    this.back = answer;
};        


var card = required("./Flashcard-Generator.js");
var fs = required("fs");
var inquire = require("inquire");
{

}
// var inputs = [];

// function InputElement () { this.focus = null; }
// function showHelp(help) { console.log(help); }

// var helpText = [
//         {'id': 'email', 'help': 'Your e-mail address'},
//         {'id': 'name', 'help': 'Your full name'},
//         {'id': 'age', 'help': 'Your age (you must be over 16)'}
//     ];

// for (var i = 0; i < helpText.length; i++) {
//     var item = helpText[i];
//     var input = new InputElement();
//     // we use an extra function to make sure
//     // whatever the value was at the time
//     // that the loop ran is passed in, and,
//     // in scope of, the function that runs later
//     // when we call input.focus();
//     input.focus = (function (help) {
//         return function() {
//             showHelp(help);
//         };
//     }(item.help));
//     inputs.push(input);
// }

// inputs.forEach(function (input) {
//     input.focus();
// });