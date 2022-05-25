import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserAuth } from '../userProvider'

const Signup = () => {
    const navigate = useNavigate
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { createNewUser } = UserAuth()
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        try {
            await createNewUser(email, password)
            navigate('/additem')
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <div>
            <form className="login_form" onSubmit={handleSubmit}>
                <h4 style={{ color: 'red' }}>{error}</h4>
                <div className="login_container">
                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} required />

                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    <button>Sign up</button>
                    Already have an account?<Link to='/login' style={{ color: 'blue' }}>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup