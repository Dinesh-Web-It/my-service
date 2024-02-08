import React from 'react'
import './FrontContent.css'
import repair from '../Assets/repair.png'
import { BsCheck } from "react-icons/bs";
const FrontContent = () => {
  return (
    <div className="container2">
        <div className="content">
            <div className="main" data-aos="fade-right" data-aos-duration="1000">
                <h1 className="text">Repair your phone</h1>
                <div className="keys-con">
                    <ul>
                        <li className="keys"><BsCheck color='green' fontSize={30}/>Repair all mobiles & Laptops</li>
                        <li className="keys"><BsCheck color='green' fontSize={30}/>warrenty on batterys</li>
                        <li className="keys"><BsCheck color='green' fontSize={30}/>moblie accessories</li>
                        <li className="keys"><BsCheck color='green' fontSize={30}/>Display changing with free Temperglass</li>
                        <li className="keys"><BsCheck color='green' fontSize={30}/>good Service</li>
                    </ul>
                </div>

            </div>

            <div className="photo" data-aos="fade-left" data-aos-duration="1000">
                <img src={repair} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default FrontContent