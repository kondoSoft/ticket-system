import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCwZnAVlTMZiHQj7BPbR_TLPPyoTdQXVX4",
  authDomain: "hotel-a0071.firebaseapp.com",
  databaseURL: "https://hotel-a0071.firebaseio.com",
  projectId: "hotel-a0071",
  storageBucket: "hotel-a0071.appspot.com",
  messagingSenderId: "733923870685"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
