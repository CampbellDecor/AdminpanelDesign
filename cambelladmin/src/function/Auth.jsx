import {
    auth
} from '../Fire'
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    getIdToken
} from 'firebase/auth'
import axios from 'axios';
import {addCookie,delteCookie,getCookie,isexist} from './CookieHandler'
import { createStorageSession,deleteStorageSession} from './SessionStorage';


export default async function Authentication (user)
{

    try {
        const loguser = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password
        )
        const exp = 1 / 24;
        const token = await getIdToken(loguser.user);
        addCookie('access_token', token,exp, '/');
        const response = await axios.get('/api/admin/login');
        const User = response.data;

        createStorageSession('current',User.user);
        return User;
    } catch (error) {
       throw error;
    }
}


export async function LogOut(user) {
    try {
        await signOut(auth);
        const admincol = await axios.get('/api/admin/logout');
        console.log(admincol);
        if (admincol)
        {
           Remeberme(user, false);
            deleteStorageSession('current');
            delteCookie('access_token');
           return true;
        } else
        {
            return false;
        }

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

export const Remeberme = (user={}, remind) =>
{

   remind ? addCookie('rememberme', user, 2) : delteCookie('rememberme');
}
export const Remebermeval = () =>
{
    return isexist('rememberme') ? getCookie('rememberme') :{email:'',password:''}
}
