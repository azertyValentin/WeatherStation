import Firebase from 'firebase'

export function initializationDB() {
    const config = {
        apiKey: "AIzaSyCT2U1b9Cw-MFM6RMxk06d6kQfXJJ0uLSE",
        authDomain: "weatherstation-db937.firebaseapp.com",
        databaseURL: "https://weatherstation-db937.firebaseio.com",
        projectId: "weatherstation-db937",
        storageBucket: "weatherstation-db937.appspot.com",
        messagingSenderId: "3074179787"
    }

    const app  = Firebase.initializeApp(config);
    const db = app.database();
    return db;
}
