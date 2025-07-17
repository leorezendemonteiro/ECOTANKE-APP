// js/auth-guard.js

document.addEventListener('DOMContentLoaded', () => {
  firebase.auth().onAuthStateChanged(user => {
    const path = window.location.pathname;
    const onLoginPage = path.endsWith('login.html') || path === '/' || path === '/index.html';
    if (user) {
      if (onLoginPage) {
        window.location.replace('dashboard/index.html');
      }
    } else {
      if (!onLoginPage) {
        window.location.replace('login.html');
      }
    }
  });
});
