// var text = prompt("Write a word")

// function CheckPalindrome() {
//     var reversedText = "";

//     for (var i = text.length-1; i >= 0; i--) {
//         reversedText += text[i];
//         }
//         if(reversedText === text){
//             alert('The word is palindrome');
//             } else{
//                 alert('The word is not palindrome');
//                 }
// }


// CheckPalindrome()


var text = prompt("Write a word")

function length(params) {

var NewText = params.split("").reverse().join("");

if (params == NewText) {
      return `${params} is palindrome`;
} else {
      return `${params} is not palindrome`;
}
}

console.log(length(text));