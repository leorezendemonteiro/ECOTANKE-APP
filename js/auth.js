// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => alert("Erro: " + error.message));
    });
  }
});

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = 'login.html';
  });
}

const db = firebase.firestore();

firebase.auth().onAuthStateChanged(async function(user) {
  if (user) {
    const userRef = db.collection('usuarios').doc(user.uid);
    const doc = await userRef.get();
    let userData;

    if (!doc.exists) {
      userData = {
        uid: user.uid,
        email: user.email,
        nome: user.displayName || "",
        role: user.email === "ecotankecomercial@gmail.com" ? "masteradmin" : "usuario"
      };
      await userRef.set(userData, { merge: true });
    } else {
      userData = doc.data();
    }

    sessionStorage.setItem("role", userData.role || "usuario");
    sessionStorage.setItem("uid", userData.uid);
    sessionStorage.setItem("email", userData.email);

    const path = window.location.pathname;
    const onLoginPage = path.endsWith('login.html') || path.endsWith('index.html') || path === '/';
    if (onLoginPage) {
      window.location.href = 'dashboard/index.html';
    }
  } else {
    const path = window.location.pathname;
    const notLoginPage = !(path.endsWith('login.html') || path.endsWith('index.html') || path === '/');
    if (notLoginPage) {
      window.location.href = 'login.html';
    }
  }
});
