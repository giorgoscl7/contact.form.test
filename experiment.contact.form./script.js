const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirmEmail');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const message = document.getElementById('message');
const btn = document.getElementById('btn');


form.addEventListener('submit', => {
    preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const confirmEmailvalue = confirmEmail.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === ''){
        setError(name, 'Name is required');
      }else {
        setSucces(name);

      }

      if (emailValue === '') {
        setError(email, 'Email is required');
      } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
      } else {
        setSuccess(email);
      }

      if (confirmEmailValue === ''){
        setError(confirmEmail, 'Please confirm your email');
      }else if (confirmEmailvalue !=== emailValue){
        setError(confirmEmail, 'Emails does not match');
      }else {
        setSucces(confirmEmail);
      }
      
      if(phoneValue === ''){
        setError(phone, 'Phone is required');
      } else if (phoneValue.length < 10 ){
        setError(phone, 'phone number must be up to 10 characters');
      } else {
        setSucces(phone);
      }

      if (addressValue === ''){
        setError(address, 'Address is required');
      }else {
        setSucces(address);

      }
      }

};


