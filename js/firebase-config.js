// js/firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCqa0efoNr9z0cuYhqJzwHuxKYyu3f3_O0",
  authDomain: "ecotanke-9200a.firebaseapp.com",
  projectId: "ecotanke-9200a",
  storageBucket: "ecotanke-9200a.appspot.com",
  messagingSenderId: "180008277057",
  appId: "1:180008277057:web:0ac1ead42bc5fc43daa2c0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
