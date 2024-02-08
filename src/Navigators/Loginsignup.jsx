import React, { useState } from 'react'
import './Loginsignup.css'
import {Link} from "react-router-dom"
import male3d from '../Assets/profile3d.png'
import female3d from '../Assets/3d-casual-life-woman-holding-phone-with-white-screen.png'
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

const Loginsignup = () => {


    const [setmenu] = useState('shop')

    return (
        <div className="login-container">
            <div className='Login'>
                <div className="profile">
                    <img className='male' src={male3d} alt='' />
                    <img className='female' src={female3d} alt=''/>
                </div>
                <form className='form'>
                    <div className="heading">
                        <h2>Login</h2>
                    </div>
                    <div className="box">
                        <div className="input-box">
                            <div className="input">
                                <CiMail className='icons' /><input type='text' placeholder='Enter your E-mail' required />
                            </div>
                            <div className="input">
                                <CiLock className='icons' /><input type='password' placeholder='Password' required />
                            </div>
                        </div>

                        <div className="login-btn">
                            <button>Login</button>
                        </div>
                        <div className="forget">
                            <p>Forget </p>
                            <div className="help">
                                <a href="" className='help'>Username</a>/
                                <a href="" className='help'>Password</a>
                            </div>
                        </div>
                    </div>
                    <div className="signup">
                        <Link to ="/signup"><a href="/"  onClick={()=>{setmenu("signup")}}>create an account<IoIosArrowRoundForward /></a></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Loginsignup