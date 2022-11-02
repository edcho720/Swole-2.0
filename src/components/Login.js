import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login(props) {

    const [ loginForm, setLoginForm ] = useState({ user: "", pass: ""});

    const { darkModeOn, toggleDarkMode } = props;

    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        setLoginForm(oldData => {
            return (
                {
                ...oldData,
                [name]: type === "checkbox" ? checked : value
                }
            )
        })
    };

  return (
    <div id="login-container" className={darkModeOn ? 'body2' : 'body'}>
        <div className={darkModeOn ? 'login' : 'login2'}>
            <label htmlFor="user">Username: </label>
            <input
                id="user"
                type="text"
                placeholder="username"
                onChange={handleChange}
                name="user"
                value={loginForm.user} 
            />
            <label htmlFor="pass">Password: </label>
            <input
                id="pass"
                type="text"
                placeholder="password"
                onChange={handleChange}
                name="pass"
                value={loginForm.pass} 
            />
            <div className="login-box">
                <div id={darkModeOn ? "login-button" : "login-button2"}>Log-in</div>
                <div id={darkModeOn ? "login-button" : "login-button2"}>Sign-up</div>
            </div>  
        </div>
      </div>  
  )
}

export default Login