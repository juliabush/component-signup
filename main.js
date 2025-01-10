const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Select all input fields within the form
    const inputs = document.querySelectorAll('#form input');

    inputs.forEach((input) => {
        // Reset error class on every input
        input.parentElement.classList.remove('error');

        if (!input.value) {
            input.parentElement.classList.add('error');
        } else {
            if (input.type === 'email') {
                if (validateEmail(input.value)) {
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            }
        }
    });
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A basic email regex
    return emailPattern.test(email);
}

