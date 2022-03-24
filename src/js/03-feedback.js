import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput,500));

populateFormFields();

function onFormSubmit(evt) {
    evt.preventDefault();
    const formData = localStorage.getItem("feedback-form-state");
    if (formData) {
        console.log(formData);
    }    
    localStorage.removeItem("feedback-form-state");
    evt.currentTarget.reset();
}

function onFormInput(evt) {
    if (evt.currentTarget) {
        const { elements: { email, message } } = evt.currentTarget;
        console.log(evt.currentTarget);
        const feedbackFormState = {
            email: email.value,
            message: message.value
        }
        localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
    }
}

function populateFormFields(evt) {
    const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (formData) {
        refs.email.value = formData.email;
        refs.message.value = formData.message;
    }      
}

