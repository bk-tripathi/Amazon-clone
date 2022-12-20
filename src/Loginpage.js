import React, { useState } from "react";
import { Link,  Navigate,  useNavigate} from "react-router-dom";
import "./Loginpage.css";
import {auth} from "./firebase";
function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail]= useState('');
  const [password, setpassword]= useState('');

  const Sign_In= e =>{
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }

  const register= e => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          //it successsfully created a new user with email and password
          console.log(auth);
          if (auth){
            navigate('/')
          }
      })
      .catch(error => alert(error.message))
    
      
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://i.pinimg.com/originals/11/44/b7/1144b71d6d569a79b7a606649e9635c1.png"
        />
      </Link>

      <div className="login_container">
      <h1>Sign In</h1>
      <form>
        <h5>Email or mobile phone number</h5>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

        <h5>Password</h5>
        <input type="password" value={password} onChange={e => setpassword(e.target.value)} />

        <button type="submit" onClick={Sign_In}
        className="Sign_in_button">Sign In</button>
      </form>
      <p>
        By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and Privacy
        Notice.
      </p>

      <button onClick={register} 
      className="register_button">Create your Amazon Account </button>
    </div>
    </div>

  );
}

export default Loginpage;
