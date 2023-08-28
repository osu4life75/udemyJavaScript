const submit = document.getElementById('submit');
submit.addEventListener('click' ,()=>{
    alert('Form Submited');
});

// script.js (inside the 'public' directory)

// Function to create a dynamic button
function createDynamicButton() {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'Dynamic Button';
    
    // Add a click event listener to the button
    button.addEventListener('click', () => {
      alert('Dynamic button clicked!');
    });
    
    // Append the button to the buttonContainer div
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.appendChild(button);
  }
  
  // Call the createDynamicButton function to create the button when the page loads
  document.addEventListener('DOMContentLoaded', createDynamicButton);
  