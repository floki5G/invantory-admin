import './style.css'
import React, { useState } from 'react'
import { signIn } from '../../action'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../signup';
import { Link } from 'react-router-dom';
export const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const auth = useSelector(state => state.adminsignIn);


    const signinSubbmit = () => {

        const admindata = {
            email: email,
            pass: password
        }
        dispatch(signIn(admindata))
    }


    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }

    return (
        <>


            <div class="login-form">
                    <h1>Login</h1>
                    <div class="content">
                        <div class="input-field">
                            <input type="email" placeholder="Email" name="email" autocomplete="nope" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="Password" name="password" autocomplete="new-password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <a href="#" class="link">Forgot Your Password?</a>
                    </div>
                    <div class="action">
                        <Link to="/admin/signup">

                            <button>Register</button>
                        </Link>
                        <button onClick={signinSubbmit}>Sign in</button>
                    </div>
            </div>

        </>
    )
}
