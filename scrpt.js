// Add your interactive features here

document.addEventListener('DOMContentLoaded', function () {
    // Add hover effects, transitions, or animations here
});

// You can add more JavaScript functionalities as needed

// Example of a simple form submission using JavaScript
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(event.target);

    // Perform actions with form data (e.g., send to backend)
    // You can use Fetch API or any other method for AJAX requests

    // Display a success message or handle errors
    alert('Form submitted successfully!');
});
