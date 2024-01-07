document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit');
    const form = document.getElementById('myForm');

    submitButton.addEventListener('click', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            gpa: document.getElementById('gpa').value,
            highSchool: document.getElementById('highSchool').value,
            position: document.getElementById('position').value,
            otherPositionsPlayed: document.getElementById('otherPositionsPlayed').value,
            // ... (other form fields)
        };
        console.log('formData',formData);

        sendDataToServer(formData);
       form.reset();
    }

});