import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const email = emailField.value;
    const password = passwordField.value;

    errorMessage.textContent = '';

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = 'dashboard.html';
    } catch (error) {
        errorMessage.textContent = 'Erro ao fazer login. Verifique suas credenciais.';
        emailField.value = '';
        passwordField.value = '';
    }
});
