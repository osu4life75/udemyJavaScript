let formDataArray = [];

function addFormData(formData) {
    formDataArray.push(formData);
}

function getAllFormData() {
    return formDataArray;
}

const submissions = [
    {
        "First Name": "John",
        "Last Name": "Doe",
        "Height": "6'2\"",
        "Weight": 180,
        "GPA": 3.5,
        "High School": "Central High School",
        "Position": "Point Guard",
        "Other Positions Played": ["Shooting Guard", "Small Forward"]
    },
    {
        "First Name": "Emily",
        "Last Name": "Smith",
        "Height": "5'9\"",
        "Weight": 150,
        "GPA": 3.8,
        "High School": "Westside High School",
        "Position": "Midfielder",
        "Other Positions Played": ["Forward"]
    },
    // ... 21 more entries with similar structures
    {
        "First Name": "Alex",
        "Last Name": "Johnson",
        "Height": "6'0\"",
        "Weight": 175,
        "GPA": 3.6,
        "High School": "North High School",
        "Position": "Pitcher",
        "Other Positions Played": ["Catcher"]
    }
];

console.log(submissions);
