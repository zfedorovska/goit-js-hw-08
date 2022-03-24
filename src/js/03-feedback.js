import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const { elements: { email, message } } = formRef;

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput,500));

populateFormFields();

function onFormSubmit(evt) {
    evt.preventDefault();
    const formData = localStorage.getItem("feedback-form-state");
    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
    }
    if (formData) {
        console.log(formData);
    }    
    localStorage.removeItem("feedback-form-state");
    evt.currentTarget.reset();
}

function onFormInput(evt) {
    const feedbackFormState = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}

function populateFormFields(evt) {
    const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
    email.value = formData.email;
    message.value = formData.message;
}

