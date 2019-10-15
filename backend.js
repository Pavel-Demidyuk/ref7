import * as firebase from 'firebase';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: 'AIzaSyAe5753q7Z2j0PlqP3cGsWgkVOF0Gd0FaI',
  authDomain: 'ref7-899d9.firebaseapp.com',
  databaseURL: 'https://ref7-899d9.firebaseio.com',
  projectId: 'ref7-899d9',
  storageBucket: 'ref7-899d9.appspot.com',
  messagingSenderId: '138632426234',
  appId: '1:138632426234:web:46d3db52e135f742'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
let connection;

/**
 * Connect to competition
 * @param {number} pin pin of competition
 */
function connectTo(pin, isMain = false) {
  console.log('connecting to', pin);

  const ref = db.ref('competions/' + pin);

  connectToRef(ref, isMain);

  connection = ref;
}

/**
 * Connect ref
 * @param {firebase.database.Reference} ref ref of competition
 */
function connectToRef(ref, isMain) {
  ref.child('ref/' + Constants.deviceId.substr(0, 16)).set({
    id: Constants.deviceId,
    delta: 0,
    running: false,
    main: isMain
  });
}

/**
 * Start timer
 */
function startTimer() {
  connection.child(
    'ref/' +
    Constants.deviceId.substr(0, 16) + 
    '/running'
  ).set(true);
}

/**
 * Stop timer
 * @param {number} delta Delta beetwen start and stop
 */
function stopTimer(delta) {
  connection.child(
    'ref/' +
    Constants.deviceId.substr(0, 16) + 
    '/running'
  ).set(false);


  connection.child(
    'ref/' +
    Constants.deviceId.substr(0, 16) + 
    '/delta'
  ).set(delta)
}

export { connectTo, startTimer, stopTimer };
