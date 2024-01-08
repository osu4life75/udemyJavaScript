document.addEventListener('DOMContentLoaded', function () {
    // ... (your existing code)
  
    const signupButton = document.getElementById('signup');
    const signupForm = document.getElementById('signupForm');
  
    signupButton.addEventListener('click', handleSignup);
  
    function handleSignup(event) {
      event.preventDefault();
  
      const signupData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
      };
      console.log('signupData', signupData);
  
      // Send this signup data to the server for account creation
      sendSignupDataToServer(signupData);
  
      // Clear the form after submission
      signupForm.reset();
    }
  
    function sendSignupDataToServer(signupData) {
      // Imagine sending a letter to the game server to create an account
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Account created:', data);
  
         
          // window.location.href = 'index.html'; reactivate once done debugging
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });

  
//   sending data to server for signup
// signup.js

// document.getElementById('signup').addEventListener('click', function() {
//     // Gather information from the form
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var email = document.getElementById('email').value;

//     // Create an object to send to the server
//     var userInfo = {
//         username: username,
//         password: password,
//         email: email,
//     };

//     console.log(userInfo);

//     // Send the data to the server using AJAX or Fetch API
//     fetch('http://localhost:3000/userInfo', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userInfo)
//   })
//       .then(response => {
//           if (!response.ok) {
//               throw new Error(`Network response was not ok. Status: ${response.status}`);
//           }
//           return response.json();
//       })
//       .then(data => {
//           console.log('Success:', data);
//       })
//       .catch((error) => {
//           console.error('Error:', error);
//       });
//     });  