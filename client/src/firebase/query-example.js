import firebase from 'firestore/app';
import 'firebase/firestore';

const firestore = firebase.firestore()


/* Get Black Tee in users > cart Items - 2 different ways of doing so */
firestore.collection('users').doc('4BM5222K3HCoOVB5cY82').collection('cartItems').doc('ESw01rYTZdtnmWqmKczR');
firestore.doc('/users/4BM5222K3HCoOVB5cY82/cartItems/ESw01rYTZdtnmWqmKczR');
/* Get all users in cartItems */
firestore.collection('/users/4BM5222K3HCoOVB5cY82/cartItems');