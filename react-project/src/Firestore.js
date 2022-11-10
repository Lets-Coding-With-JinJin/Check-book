
import firebase from 'firebase';

var config = {
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export default firestore;