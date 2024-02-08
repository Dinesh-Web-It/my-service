import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './Navigation.css'
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import logo1 from '../Assets/logo1.png'


const Navigation = () => {

  const[menu,setmenu] = useState('shop')

  function sidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function menubar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }


  return (

    <nav>
      <div className="container1">
        <span>
          <img className="image" src={logo1} alt='not support' />
        <h4>Adharva Mobiles</h4>
        </span>
         <ul className="list">
          <li className="side-tasks" onClick={()=>{setmenu("home")}}><Link to="/"> <a >Home</a></Link></li>       
          <li className="side-tasks" onClick={()=>{setmenu("features")}}><Link to="/features"> <a >Features</a></Link> </li>
          <li className="side-tasks" onClick={()=>{setmenu("products")}}><Link to="/products"> <a  >Products</a></Link> </li>
          <li className="side-tasks" onClick={()=>{setmenu("accessories")}}><Link to="/accessories"> <a  >Accessories</a></Link> </li>
          <li className="side-tasks" onClick={()=>{setmenu("service")}}><Link to="/service"> <a >Service</a></Link> </li>
          <li className="side-tasks" onClick={()=>{setmenu("aboutus")}}><Link to="/aboutus"> <a  >Aboutus</a></Link> </li>
          <li  id='btn' onClick={()=>{setmenu("/login")}}><Link to="/login">< a id='a' >Login</a></Link> </li>
          <li className="bar" onClick={sidebar}><a id='icon'><BiMenuAltRight /></a></li>
        </ul>
        <ul className="sidebar">
          <li className='cross' onClick={menubar}><a ><RxCross2 /></a></li>
          <li className="tasks" onClick={()=>{setmenu("home")}}><Link to="/"> <a >Home</a></Link> </li>
          <li className="tasks" onClick={()=>{setmenu("features")}}><Link to="/features"> <a >Features</a></Link> </li>
          <li className="tasks" onClick={()=>{setmenu("products")}}><Link to="/products"> <a  >Products</a></Link> </li>
          <li className="tasks" onClick={()=>{setmenu("accessories")}}><Link to="/accessories"> <a >Accessories</a></Link> </li>
          <li className="tasks" onClick={()=>{setmenu("service")}}><Link to="/service"><a  >Service</a></Link>  </li>
          <li className="tasks" onClick={()=>{setmenu("aboutus")}}><Link to="/aboutus"><a  >Aboutus</a></Link>  </li>
          <li className="tasks" onClick={()=>{setmenu("login")}}><Link to="/login"> <a  >Login</a></Link> </li>
          </ul>
      </div>
    </nav>

  )
}

export default Navigation
