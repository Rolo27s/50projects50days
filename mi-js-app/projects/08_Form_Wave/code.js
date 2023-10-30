const dynamicTextEmail = document.getElementById('text-email');
const email = document.getElementById('email');

const dynamicTextPassword = document.getElementById('text-password');
const password = document.getElementById('password');

email.addEventListener('focus', () => {
    dynamicTextEmail.style.transform = "translateY(-1rem)";
    dynamicTextEmail.style.color = "rgba(178, 227, 250, 0.9)";
    email.setAttribute('placeholder', "");
    email.style.borderBottom = "2px solid rgba(178, 227, 250, 0.8)";
});

password.addEventListener('focus', () => {
    dynamicTextPassword.style.transform = "translateY(-1rem)";
    dynamicTextPassword.style.color = "rgba(178, 227, 250, 0.9)";
    password.setAttribute('placeholder', "");
    password.style.borderBottom = "2px solid rgba(178, 227, 250, 0.8)";
});

email.addEventListener('focusout', () => {
if (email.value == "") {
        dynamicTextEmail.style.transform = "translateY(0.5rem)";
        dynamicTextEmail.style.color = "rgba(178, 227, 250, 0.1)";
        email.setAttribute('placeholder', "Email");
        email.style.borderBottom = "2px solid #eee";
    }
});

password.addEventListener('focusout', () => {
if (password.value == "") {
        dynamicTextPassword.style.transform = "translateY(0.5rem)";
        dynamicTextPassword.style.color = "rgba(178, 227, 250, 0.1)";
        password.setAttribute('placeholder', "Password");
        password.style.borderBottom = "2px solid #eee";
    }
});
