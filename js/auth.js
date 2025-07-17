// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "dashboard/index.html")
        .catch(error => alert("Erro: " + error.message));
    });
  }
});

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = 'login.html';
  });
}
