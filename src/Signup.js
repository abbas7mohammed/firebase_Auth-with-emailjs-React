import React, { useCallback, useRef } from 'react'
import app from './firebase.js';
import 'firebase/compat/auth'
import {GoogleAuthProvider} from 'firebase/auth'



const provider = new GoogleAuthProvider();
const auth = app.auth();


const Signup = ()=>{

    const email = useRef(null);
    const password = useRef(null);

    const SignupWithFirebase= useCallback(async e => {
            e.preventDefault();
            await auth.createUserWithEmailAndPassword(email.current.value, password.current.value)
            .then((res)=>{
                alert("Sign up is sucssesful")
            })
            .catch((error)=>{
                alert(error)
            })
        },[],
    );
    const SignupWithGoogle = ()=>{
         auth.signInWithPopup(provider)
        .then(()=>{
            alert("sign up with google")
        })
        .catch((error)=>{
            alert(error)
        })
    }

    return(
        <div>
            <form onSubmit={SignupWithFirebase}>
                <h1>Sign up</h1>
                <label>
                    Email<br/>
                    <input ref={email} type="email" placeholder="email"/>
                </label>
                <label>
                    Password<br/>
                    <input ref={password} type="password" placeholder="password"/>
                </label><br/>
                <button type="submit" >Sign up</button>
            </form>

            <button onClick={()=>{SignupWithGoogle()}}>Signup with Google</button>

        </div>
    );
}

export default Signup;
