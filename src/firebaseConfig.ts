import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const config = {

    apiKey: "AIzaSyAwl1n2hFNHq7WZb2gyduuiOzpogT6PkSQ",
    authDomain: "test-tienda-0922.firebaseapp.com",
    projectId: "test-tienda-0922",
    storageBucket: "test-tienda-0922.appspot.com",
    messagingSenderId: "286856705887",
    appId: "1:286856705887:web:cd102248a2ff11306f68ea"

}

const app = initializeApp(config);
//let auth: Auth;

export async function loginUser( username:string, password:string) {
    //firebase login
    console.log(username, password, app)

    try {
        const user = await signInWithEmailAndPassword(getAuth(app), username, password);
        return user;
      } catch (e) {
        return null;
      }
}

