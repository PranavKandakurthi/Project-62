import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyApkr4rEaf6qgIgmYPm6-yRiWNjanrcXzs",
    authDomain: "school-attendance-5cd15.firebaseapp.com",
    databaseURL: "https://school-attendance-5cd15-default-rtdb.firebaseio.com",
    projectId: "school-attendance-5cd15",
    storageBucket: "school-attendance-5cd15.appspot.com",
    messagingSenderId: "525020958958",
    appId: "1:525020958958:web:c0d09a701e892a9d4863ff"
  };

   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();