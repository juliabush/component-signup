const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Select all input fields within the form
    const inputs = document.querySelectorAll('#form input');

    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add('error');
        } else {
        input.parentElement.classList.remove('error');
        }
        });
    });

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A basic email regex
    return emailPattern.test(email);
}

