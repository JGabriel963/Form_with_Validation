const container = document.querySelector('.container');
const modal = document.querySelector('.modal-sucess');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');


form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkForm();
})

email.addEventListener('blur', () => {
    checkInputEmail();
})

username.addEventListener('blur', () => {
    checkInputUsername();
})

password.addEventListener('blur', () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener('blur', () => {
    checkInputPasswordConfimation();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if(usernameValue === "") {
        errorInput(username, "Preecha um username.")
    } else {
        const formItem = username.parentElement;
        formItem.classList.remove('error');
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "O email é obrigatório.")
    } else {
        const formItem = email.parentElement;
        formItem.classList.remove('error');
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "A senha é obrigatóia.")
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres")
    } else {
        const formItem = password.parentElement;
        formItem.classList.remove('error')
    }
}

function checkInputPasswordConfimation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    } else if(confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não são iguais.")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.classList.remove('error')
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfimation();

    const forItems = form.querySelectorAll('.form-content')

    const isValid = [...forItems].every( (item) => {
        return item.className === "form-content"
    });

    console.log(isValid);

    if (isValid) {
        container.classList.add('hidde');
        modal.classList.add('confirm')
    }

}

modal.addEventListener('click', () => {
    window.location.reload()
})

function errorInput (input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('span')

    textMessage.innerText = message;

    formItem.classList.add('error')
}