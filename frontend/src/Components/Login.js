import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [userField, setUserField] = useState({
        email: '',
        password: '',
        confirm_password: '',
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
        }
        if (userField.password !== userField.confirm_password) {
            e.preventDefault()
        } else {
            navigate('/additem')
        }
    }
    return (
        <div>
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="login_container">
                    <input type="email" placeholder="email" name="email" value={userField.email} onChange={handleForm} required />

                    <input type="password" placeholder="Password" name="password" value={userField.password} onChange={handleForm} required />

                    <input type="password" placeholder="Confirm Password" name="confirm_password" value={userField.confirm_password} onChange={handleForm} required />
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
