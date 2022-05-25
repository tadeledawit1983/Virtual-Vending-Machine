import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [userField, setUserField] = useState({
        email: '',
        password: '',
    })
    function handleForm(e) {
        const { name, value } = e.target
        setUserField(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        if (userField.email === '') {
            console.log('Please enter name')
        } else {
            e.preventDefault()
            navigate('/additem')
        }
    }

    return (
        <div className="loginForm_container">
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="login_container">
                    <input type="email" placeholder="email" name="email" value={userField.email} onChange={handleForm} required />

                    <input type="password" placeholder="Password" name="password" value={userField.password} onChange={handleForm} required />

                    <button>Login</button>
                    Don't have an account yet?<Link style={{ color: 'blue' }} to="/signup"> Signup</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
