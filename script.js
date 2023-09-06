const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  const formData = {
    firstName: document.querySelector('[aria-label="First name"]').value,
    lastName: document.querySelector('[aria-label="Last name"]').value,
    height: document.querySelector('[aria-label="Height"]').value,
    weight: document.querySelector('[aria-label="Weight"]').value,
    highSchool: document.querySelector('[aria-label="High School"]').value,
    gpa: document.querySelector('[aria-label="GPA"]').value,
    position: document.querySelector('[aria-label="Position"]').value,
    otherPositions: document.querySelector('[aria-label="Other Postions Played"]').value,
  };

  // Send a POST request to the server
  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert('Form Submitted Successfully');
      } else {
        alert('Error Submitting Form');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error Submitting Form');
    });
});
