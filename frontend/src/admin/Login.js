import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserAuth } from '../userProvider'
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { signIn, signout } = UserAuth()
    async function handleSubmit(e) {
        // if (userField.email === '') {
        //     console.log('Please enter name')
        // } else {
        e.preventDefault()
        // }
        setError('')
        try {
            await signIn(email, password)
            navigate('/additem')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="loginForm_container">

            <h4 style={{ color: 'red' }}>{error}</h4>
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="login_container">
                    <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button>Login</button>
                    Don't have an account yet?<Link style={{ color: 'blue' }} to="/signup"> Signup</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
