import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate
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
    return (
        <div>
            <form className="login_form" >
                <div className="login_container">
                    <input type="email" placeholder="email" name="email" value={userField.email} onChange={handleForm} required />

                    <input type="password" placeholder="Password" name="password" value={userField.password} onChange={handleForm} required />

                    <input type="password" placeholder="Confirm Password" name="confirm_password" value={userField.confirm_password} onChange={handleForm} required />
                    <button>Sign up</button>
                    Already have an account?<Link to='/login' style={{ color: 'blue' }}>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup