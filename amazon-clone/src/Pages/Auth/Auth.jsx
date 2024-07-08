import React from 'react'
import classes from './Auth.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { Link } from 'react-router-dom';
const Auth = () => {
    return (
      <section className={classes.login}>
        {/* logo  */}
        <Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt=""
          />
        </Link>
        {/* form  */}
        <div className={classes.login__container}>
          <h1>Sign-in</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button className={classes.login__signInButton}>Sign in</button>
          </form>
          {/* agreement  */}
          <p>By signing-in you agree to the amazon cloned conditions of Use & Sell. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
          {/* create account btn*/}
          <button className={classes.login__registerButton}>Create you Amazon Account</button>
        </div>
      </section>
    );
}

export default Auth
