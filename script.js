document.addEventListener('DOMContentLoaded', function() {
   const submitButton = document.getElementById('submit');
   const form = document.getElementById('myForm');

   submitButton.addEventListener('click', handleSubmit);

   function handleSubmit(event) {
       event.preventDefault();

       const firstName = document.getElementById('firstName').value;
       const lastName = document.getElementById('lastName').value;
       const height = document.getElementById('height').value;
       const weight = document.getElementById('weight').value;
       const gpa = document.getElementById('gpa').value;
       const highSchool = document.getElementById('highSchool').value;
       const position = document.getElementById('position').value;
       const otherPositionsPlayed = document.getElementById('otherPositionsPlayed').value;

       const formData = {
           firstName,
           lastName,
           height,
           weight,
           gpa,
           highSchool,
           position,
           otherPositionsPlayed
       };

       sendDataToServer(formData);
   }

   function sendDataToServer(formData) {
       fetch('http://localhost:3000/submitFormData', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(formData),
       })
       .then(response => response.json())
       .then(data => {
           console.log('Form data sent:', data);
           clearForm(form); // Clear the form after successful submission
       })
       .catch(error => {
           console.error('Error:', error);
       });
   }

   function clearForm(form) {
       form.reset(); // Reset the form fields
   }
});
