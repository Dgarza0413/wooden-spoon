import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyAnXLn1HZYXp4nKnRRxuGiGYGx4vJx6FsA",
    authDomain: "wooden-spoon-b3608.firebaseapp.com",
    databaseURL: "https://wooden-spoon-b3608.firebaseio.com",
    projectId: "wooden-spoon-b3608",
    storageBucket: "",
    messagingSenderId: "531404044060",
    appId: "1:531404044060:web:2912dde85afc67ed"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;