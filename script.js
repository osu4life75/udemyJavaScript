//Function Decleration 

//function sayHello() {
 // console.log("Hello");
//}

//sayHello();

//Function Expression: Anonymous Function

//var sayBye = function() {
//  console.log("Bye");
//}

//sayBye();

/*function multiply(a,b) {
    return a * b;
  
}


var total = multiply(4,5);
alert(total);*/

// Data Structure

/* var list = ["tiger", "cat","bear", "bird"];
console.log(list[1]);*/

var list = ["tiger", "cat","bear", "bird"];

var button = document.getElementById("clickME");

button.addEventListener("click", function() {
  console.log("CLICK!!!");
})

var button2 = document.getElementById("button2");

button2.addEventListener("click", function(){
  console.log("I work!!!")
})

var button3 = document.getElementById("button3");

button3.addEventListener("click", handClick);

function handClick() {
  var myArray = ['apple', 'banana', 'orange', 'grape'];
  
  for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
}
 









