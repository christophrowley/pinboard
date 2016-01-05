import React from 'react';
import ReactDOM from 'react-dom';
import ReactFireMixin from 'reactfire';
import Pearl from './components/Pearl.js';
import Firebase from 'firebase';

var FirebaseRef = new Firebase('https://torrid-fire-2043.firebaseio.com/');
var FirebasePostsRef = FirebaseRef.child('posts');

ReactDOM.render( <Pearl FirebasePostsRef={ FirebasePostsRef }/>, document.getElementById('app-container') );
