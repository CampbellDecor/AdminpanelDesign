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
import Swal  from 'sweetalert2'

export default async function Authentication (user)
{
    if (!user?.email || !user?.password)
    {
        Swal.fire({
            title: "InCorrect Inputs",
            icon: 'error',
            text: 'Sorry! your Input is wrong try with correct input'
        })
        throw new Error("Email or password Empty");
    }
    try {
        const loguser = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password
        )
        addCookie('access_token',loguser.user.uid,1000*60*60*2, '/');
        const response = await axios.get('/api/admin/login');
        const User = response.data;
        createStorageSession('current', { uid:loguser.user.uid,...User.user });
        return User;
    } catch (error)
    {
        if (error.code===`auth/user-disabled`)
        {
           Swal.fire({
  title: 'Account locked',
  text: `Sorry! ,${user?.email} is Locked please contact with High Authority`,
  icon: 'error'
})

        }
        if (error.code === `auth/wrong-password`)
        {
            Swal.fire({
                title: "Wrong password",
                text: "Sorry! , Your Password is Incorrect Checek and Try again",
                icon: 'error',
                confirmButtonColor:"#c59290"
             })
         }
        if (error.code === `auth/user-not-found`)
        {
            Swal.fire({
                title: "Wrong Email",
                text: "Sorry! , Your Email is Incorrect Checek and Try again",
                icon: 'error',
                confirmButtonColor:"#c59290"
             })
         }
       throw error;
    }
}


export async function LogOut(user) {
    try {
        await signOut(auth);
        const admincol = await axios.get('/api/admin/logout');
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
        const result = await sendPasswordResetEmail(email);
        addCookie('pswreset', { email, date: new Date() }, 1)
        return result;
    } catch (error)
    {
        console.log(error)
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
