import firebase from "firebase/app"
import "firebase/auth"

export const signIn = async (email, password) => {
    try {
        return await firebase.auth().signInWithEmailAndPassword(email,password)
    } catch (e) {
        console.log(e)
        return null;
    }
}