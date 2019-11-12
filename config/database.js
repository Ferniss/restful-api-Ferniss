const firebase = requrie("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyDYNd_oe3rlsCx-sg23owtndpov5PbD8S4",
    authDomain: "briansostebiksmathias.firebaseapp.com",
    databaseURL: "https://briansostebiksmathias.firebaseio.com",
    projectId: "briansostebiksmathias",
    storageBucket: "briansostebiksmathias.appspot.com",
    messagingSenderId: "909080022905",
    appId: "1:909080022905:web:ae591d44f356a7948ba9a8"
  };

  const db = firebase.initalize(firebaseConfig);
  module.exports = db;