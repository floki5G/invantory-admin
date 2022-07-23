import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionsignup } from '../../action/signUp';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signIn } from '../../action/auth.action';
import { adminsingout } from '../../action';
import './style.css'
export const Signup = () => {


    const [data, setData] = useState('')
    const dispatch = useDispatch()
    const adminauth = useSelector(state => state.adminsignup)

    const handelChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const signUpdata = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        pass: data.password,
        confirmPassword: data.confirmPassword,
        contectNumber: data.contectNumber,
        role: "admin"
    }

    // const signUpdata = () => {


    // }


    const signUnSubbmit = () => {
        dispatch(actionsignup(signUpdata))
    }

    const admindata = {
        email: data.email,
        pass: data.password,
    }
    const signInSubbmit = () => {

        dispatch(adminsingout())
        dispatch(signIn(admindata))

    }


    return (
        <>

            <div class="login-form">
    
                    <h1>Login</h1>
                    <div class="content">
                        <div class="input-field">
                            <input type="text" name='firstName' placeholder='fN' onChange={(e) => handelChange(e)} />

                        </div>
                        <div class="input-field">
                            <input type="text" name='lastName' placeholder='lN' onChange={(e) => handelChange(e)} />

                        </div>
                        <div class="input-field">
                            <input type="email" name='email' placeholder='em' onChange={(e) => handelChange(e)} />

                        </div>
                        <div class="input-field">
                            <input type="text" name='password' placeholder='pass' onChange={(e) => handelChange(e)} />

                        </div>

                        <div class="input-field">
                            <input type="text" name='confirmPassword' placeholder='conpass' onChange={(e) => handelChange(e)} />

                        </div>    <div class="input-field">
                        <input type="number" placeholder='contact number' name='contectNumber' onChange={(e) => handelChange(e)} />

                        </div>
          
                    </div>
                    <div class="action">
                        <button>Register</button>
                        <button onClick={signUnSubbmit} >Signup</button>

                    </div>
          
            </div>



            <div>
                {(adminauth.success) ? <div> "signup successfull"

                    <button onClick={signInSubbmit}>
                        <Link to='/'> click here</Link>
                    </button>
                </div> : (adminauth.accountalreadyexist) ? <div> "acc al"

                    <button onClick={signInSubbmit}>
                        <Link to='/admin/signin'> click here to login</Link>
                    </button>
                </div> : "something went wrong"}
            </div>

        </>
    )
}