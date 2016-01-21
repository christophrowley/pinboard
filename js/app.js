import React from 'react';
import ReactDOM from 'react-dom';
import ReactFireMixin from 'reactfire';
import PinBoard from './components/PinBoard.js';
import Firebase from 'firebase';

var FirebaseRef = new Firebase('https://torrid-fire-2043.firebaseio.com/');
var FirebasePostsRef = FirebaseRef.child('posts');

ReactDOM.render( <PinBoard FirebasePostsRef = { FirebasePostsRef }/>, document.getElementById('app-container') );
