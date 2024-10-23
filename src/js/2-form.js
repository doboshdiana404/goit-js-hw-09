

let formData={
    email: "",
    message: ""
};
const STORAGE_KEY ="feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", handleInput);

populateInput();

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateInput() {
    const saveMessage=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveMessage) {
        form.elements.email.value = saveMessage.email || '';
        form.elements.message.value = saveMessage.message || '';
      
    }

}

function handleSubmit(event) {
    event.preventDefault();
    if (!form.elements.email.value || !form.elements.message.value) {
        return alert('Fill please all fields');
      }
      console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData={};
}


