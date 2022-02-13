import React, { useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history=useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn=e=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('./');
        })
        .catch(error=>alert(error.message))
        //firebase login code
    }
    const register=e=>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                //successfully created a new user and pass
                if(auth){
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
        //firebase register
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img 
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt=""/>
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            <br></br>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange=
                {e=>setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange=
                {e=>setPassword(e.target.value)} />

                <button className="login__signInButton" type="submit" onClick={signIn} >Sign in</button>
            </form>
            <p>
                By Signing-in you agree to AMAZON CLONE condition of use&Sales.
                This site is only created as A project and doesnt deal in e-commerce.
            </p>

            <button onClick={register} className="login__registerButton">
                Create Your Amazon clone Account
            </button>
        </div>
    </div>
  )
}

export default Login;