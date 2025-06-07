const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

messageInput.addEventListener('input', handleInput);
function handleInput(event) {
  const message = event.target.value;
  formData.message = message;
  saveToLocalStorage();
}

emailInput.addEventListener('input', handleEmailInput);
function handleEmailInput(event) {
  const email = event.target.value.trim();
  formData.email = email;
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Поля форми не можуть бути порожніми');
    return
  }
  if (!formData.email.includes('@')) {
    alert('Email має містити символ "@"');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
}
