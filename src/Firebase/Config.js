import firebase from 'firebase';
const Config = {
    apiKey: "AIzaSyBjNodXG59L-LiKI_uUdjgpxKx6_jCwdKc",
    authDomain: "miniproject-client.firebaseapp.com",
    databaseURL: "https://miniproject-client.firebaseio.com",
    projectId: "miniproject-client",
    storageBucket: "miniproject-client.appspot.com",
    messagingSenderId: "526330409178",
    appId: "1:526330409178:web:c76b05ca13b6b501c035e3",
    measurementId: "G-JDXPEPS05Q"
  };
  const fire = firebase.initializeApp(Config)

export default fire;