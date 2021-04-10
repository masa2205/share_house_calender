import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

// 以下はValueにデモ用の値をセットしています。ご自身の環境に合わせて書き換えてください。
const firebaseConfig = {
    apiKey: "AIzaSyDTPfR0H1qd60rVJom38BzKoycBhXmFxBg",
    authDomain: "vuetify-share-house.firebaseapp.com",
    databaseURL: "https://vuetify-share-house-default-rtdb.firebaseio.com",
    projectId: "vuetify-share-house",
    storageBucket: "vuetify-share-house.appspot.com",
    messagingSenderId: "778663246711",
    appId: "1:778663246711:web:ae8920f11562e6573e3f72",
    measurementId: "G-XCGGEJ1SLR"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;