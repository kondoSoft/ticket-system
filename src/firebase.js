import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCwZnAVlTMZiHQj7BPbR_TLPPyoTdQXVX4",
  authDomain: "hotel-a0071.firebaseapp.com",
  databaseURL: "https://hotel-a0071.firebaseio.com",
  projectId: "hotel-a0071",
  storageBucket: "hotel-a0071.appspot.com",
  messagingSenderId: "733923870685"
};

const fire = firebase.initializeApp(config);

export default fire;
