import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import './index.css'
import { actionupdate } from '../../action/signUp';
import { useHistory } from 'react-router-dom';
export const Profile = () => {

    const { _id, firstName, lastName, email, role } = useParams()

    const [first, setFirstname] = useState(firstName)
    const [last, setLastname] = useState(lastName)
    const [emai, setEmail] = useState(email)
    const [pass, setPass] = useState("")
    const [conpass, setConpass] = useState("")
    const [number, setNumber] = useState("")

    const dispatch = useDispatch()
    const signUpdata = {
        _id: _id,
        firstName: first,
        lastName: last,
        email: emai,
        pass: pass,
        confirmPassword: conpass,
        contectNumber: number,
        role: role
    }
    let history = useHistory();


    const signUnSubbmit = () => {

        dispatch(actionupdate(signUpdata))
        history.push("/")

    }



    return (
        <>

            <div class="login-form">

                <h1>Login</h1>
                <div class="content">
                    <div class="input-field">
                        <input type="text" name='firstName' placeholder='fN' value={firstName} onChange={(e) => setFirstname(e.target.value)} />

                    </div>
                    <div class="input-field">
                        <input type="text" name='lastName' placeholder='lN' value={lastName} onChange={(e) => setLastname(e.target.value)} />

                    </div>
                    <div class="input-field">
                        <input type="email" name='email' placeholder='em' value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div class="input-field">
                        <input type="text" name='password' placeholder='pass' onChange={(e) => setPass(e.target.value)} />

                    </div>

                    <div class="input-field">
                        <input type="text" name='confirmPassword' placeholder='conpass' onChange={(e) => setConpass(e.target.value)} />

                    </div>

                    {/* <a href="#" class="link">Forgot Your Password?</a> */}
                </div>
                <div class="action">

                    <button style={{"border":"none","background":"yellow"}} onClick={() => signUnSubbmit()} >confirm</button>

                </div>

            </div>


        </>
    )
}