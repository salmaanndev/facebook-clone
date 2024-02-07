import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.leftContent}>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="facebook" />
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className={styles.rightContent}>
        <form>
            <input type='text' placeholder='Email address or phone number' />
            <input type='password' placeholder='Password' />
            <Link to="feed" className={styles.loginBtn}>Log in</Link>
            <p>Forgotten Password?</p>
            <hr />
            <button className={styles.createBtn}>Create new account</button>
        </form>
        <p><strong>Create a Page</strong> for a celebrity, brand or business</p>
      </div>
    </div>
  )
}

export default Login
