//Loops

var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
var todosLength = todos.length;
//for ( var i=0; i < todosLength; i++ ) {
//     todos.pop();
//}

//var counterOne = 10;
//while (counterOne > 0) {
 //   console.log(counterOne);
  //  counterOne--
//}
//var counterTwo = 10;
//do {
   // console.log(counterTwo)
   // counterTwo++
//}while (counterTwo > 0);


//if (name === "Billy" || name === "Ann"){
  //alert("Hi BIlly or Ann!");
//}

// Get the button element
const button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Perform your desired action when the button is clicked
  console.log('Button clicked!');
});

function multiply(a, b) {
 return a * b
}
multiply(5, 10);