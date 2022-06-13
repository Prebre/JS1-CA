// contact.html
/*  - Create a form with the following inputs and validation rules.
        -- Name - required
        -- Subject - must have a value with a minimum length of 10
        -- Email - must have a value and be formatted like an email address
        -- Address - must have a value with a minimum length of 25
    - When the form on this page is submitted, write code to validate the input. If any of the inputs fail validation display an error message for the relevant input.
    - If all validation passes, add a message above the form indicating the form passed validation. */

const form = document.querySelector('#infoForm');
const fullname = document.querySelector('#name');
const subject = document.querySelector('#subject');
const email = document.querySelector('#email');
const address = document.querySelector('#address');
    
fullname.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your name');
        }
})
    
fullname.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
subject.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please add a subject');
        }
    
        if (event.target.validity.tooShort) {
                event.target.setCustomValidity('Must contain at least 10 characters');
        }
})
    
subject.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
email.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your email');
        }
            
        if (event.target.validity.typeMismatch) {
                event.target.setCustomValidity('Please fill in a valid email');
        }
})
    
email.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
address.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
                event.target.setCustomValidity('Please fill in your address');
        }
            
        if (event.target.validity.tooShort) {
                event.target.setCustomValidity('Must contain at least 25 characters');
        }
})
    
address.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
})
    
form.onsubmit = function validateForm(event) {
        event.preventDefault();

    document.getElementById('callvalidation').innerHTML += '<p>All inputs are valid.</p>'
}