import {
    auth,
    fstore
} from '../Fire'
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth'
import {
    getDoc,
    doc,
    updateDoc
} from 'firebase/firestore'
import {addCookie,delteCookie,getCookie,isexist} from './CookieHandler'
import { createStorageSession} from '../function/SessionStorage';


export default async function Authentication (user)
{
    try {
        const loguser = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password
        )
        const admincol = await doc(fstore, 'admins',  loguser.user.uid)
        await updateDoc(admincol, {
            isOnline: true
        })
        const User = await getDoc(admincol);
        createStorageSession('current', { ...User.data() });
        return true;
    } catch (error) {
       throw error;
    }
}







export async function ResetPasswordApi(email) {

    try
    {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw error;
    }

}

export const loginreducer = (state, action) => {
    switch (action.type) {
        // eslint-disable-next-line no-lone-blocks
        case "CHANGE_INPUT": {
            return {
                ...state,
                [action.input.name]: action.input.value
            };

        }
        case "AUTHERROR": {
            return {

                ...state,
                password: ''
            }
        }
        case "ERROR": {
            return {
                email: "invalid Input",
                password: 'invalid Input',
            }
        }
        case "REMIND": {
            return Remebermeval();
            }
        default:
            return {
                email: '', password: ''
            }
    }
}

export const Remeberme = (user, remind) =>
{

   remind ? addCookie('rememberme', user, 2) : delteCookie('rememberme');
}
export const Remebermeval = () =>
{
    return isexist('rememberme') ? getCookie('rememberme') :{email:'',password:''}
}
