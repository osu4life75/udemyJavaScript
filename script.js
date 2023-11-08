window.onload = function () {
    console.log('Window has finished loading.');
}

document.addEventListener('DOMContentLoaded', function() {
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
            otherPositionsPlayed: document.getElementById('otherPositionsPlayed').value
        };

        sendDataToServer(formData);
        console.log('Form data:', formData); // Log the form data to console
        clearForm(form);
    }

    function sendDataToServer(formData) {
        // Replace the URL with your server endpoint
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
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function clearForm(form) {
        form.reset(); // Reset the form fields
    }
});
