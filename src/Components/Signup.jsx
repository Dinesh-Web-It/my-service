import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <div className='signup-container'>
            <form className='signup-form'>
                <div className="signup-heading">
                    SignUp
                </div>
                <div className="signup-text">
                    <div className="input-text" >
                        Enter a E-mail<input type='text' /> 
                    </div>
                    <div className="input-text" >
                        Password<input type='text' />
                    </div>
                    <div className="input-text" >
                        Confirm Password<input type='text' />
                    </div>
                    <div className="check-box">
                        <input type='checkbox' /><p>I have accept the conditions and & policy.</p>
                    </div>
                </div>
                <div className="signup-btn">
                    <button>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default Signup