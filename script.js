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

//var button = document.getElementById("clickME");

//button.addEventListener("click", function() {
  //console.log("CLICK!!!");
//})

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

function greet() {
  console.log("Hello, I'm " + this.firstName + " " + this.lastName + ".");
}

var myArray2 = {
  firstName: "George",
  lastName: "Lynch",
  age: 45,
  occupation: "Developer",
  greet: greet
};

console.log(myArray2);
myArray2.greet();

var button4 = document.getElementById("button4");

button4.addEventListener('click',function(){
  console.log("Hello World!")
})

var button = document.getElementById("enter");

button.addEventListener("click", function(){
  console.log('clicks')
})

function make500buttons() {
  const parentElement = document.getElementById("one")
  for (let index = 1; index <= 500; index++) {
    const newButton = document.createElement("button")
    newButton.innerText = `button ${index}`;
     newButton.addEventListener('click', () => addMeToButton(index))
     parentElement.appendChild(newButton);
    
  }
}
function addMeToButton(i){
  console.log(`Bryan Made Me Do IT ${i}`)
}

var image = document.getElementById('image');
var rotateButton = document.getElementById('rotateButton');

var currentRotation = 0;

rotateButton.addEventListener('click', function() {
    currentRotation += 45; // Rotate by 45 degrees

    // Apply the rotation using the transform property
    image.style.transform = 'rotate(' + currentRotation + 'deg)';
});

let myForm = document.getElementById("myForm");

function checkForm() {
    let firstName = 'George';
    let lastName = 'Lynch';

    if (firstName + ' ' + lastName === 'George Lynch') {
        console.log('You are learning!');
    } else {
        console.log('Error');
    }
}

myForm.addEventListener("click", function() {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log('Form submitted');
});

console.log(myForm);





