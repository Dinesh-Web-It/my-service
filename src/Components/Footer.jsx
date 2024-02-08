import React from 'react'
import './Footer.css'
import logo1 from '../Assets/logo1.png'
import twitter from '../Assets/twitter.png'
import instagram from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp (1).png'
import email from '../Assets/email.png'

const Footer = () => {
  return (
    <div>
        <footer>
        <div className="container6">
            <div className="wrapper1">
                <div className="footer1">
                    <ul>
                        <li>
                            <h3>Services</h3>
                        </li>
                        <li className="foo"><a href="/sellphones">Sell Phones</a></li>
                        <li className="foo"><a href="/MobileService">Mobile Service</a></li>
                        <li className="foo"><a href="/Laptop Service">Laptop Service</a></li>
                        <li className="foo"><a href="/Recharge">Recharge</a></li>
                        <li className="foo"><a href="/Custamize Photo Cases">Custamize Photo Cases</a></li>
                        <li className="foo"><a href="/Buy Secondhand Phones">Buy Secondhand Phones</a></li>
                        <li className="foo"><a href="/Temperglass Pasting">Temperglass Pasting</a></li>
                        <li className="foo"><a href="/Mobile Glass Changing">Mobile Glass Changing</a></li>
                    </ul>
                </div>
                <div className="footer1">
                    <ul>
                        <li>
                            <h3>Business</h3>
                        </li>
                        <li className="foo"><a href='mobilerepair' className>Mobile Repair</a></li>
                        <li className="foo"><a href="/">Mobile Accessories</a></li>
                        <li className="foo"><a href="/">Secondhand Mobiles</a></li>
                        <li className="foo"><a href="/">Portraite Drawings</a></li>
                        <li className="foo"><a href="/">Photography</a></li>
                        <li className="foo"><a href="/">Craft Items</a></li>
                    </ul>
                </div>
                <div className="footer1">
                    <ul>
                        <li>
                            <h3>Sell Items</h3>
                        </li>
                        <li className="foo"><a href="/">All Temperglass</a></li>
                        <li className="foo"><a href="/">Phone Cases</a></li>
                        <li className="foo"><a href="/">Charger</a></li>
                        <li className="foo"><a href="/">All Cables</a></li>
                        <li className="foo"><a href="/">Earphones</a></li>
                        <li className="foo"><a href="/">OTG Connectors</a></li>
                        <li className="foo"><a href="/">Neck Band</a></li>
                        <li className="foo"><a href="/">Secondhand Mobiles</a></li>
                        <li className="foo"><a href="/">Axe Cables</a></li>
                    </ul>
                </div>
                <div className="footer1">
                    <ul>
                        <li>
                            <h3>Help & Support</h3>
                        </li>
                        <li className="foo"><a href="#/">Contact Us</a></li>
                        <li className="foo"><a href="#/">Warrenty Policy</a></li>
                        <li className="foo"><a href="#/">Refund Policy</a></li>
                        <li className="foo"><a href="#/">Privacy Policy</a></li>
                        <li className="foo"><a href="#/">Terms & Conditions</a></li>
                        <li className="foo"><a href="#/">More Info</a></li>
                        <li className="foo"><a href="#/">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className="wrapper2" data-aos="zoom-out">
                <div className="logo-icon">
                    <img src={logo1} alt=" not Supported" />
                    <p>Follow us on</p>
                </div>
                <div className="icons">
                    <ul>
                        <li className="I">
                            <a href="/#">
                                <img src={twitter} alt="can't access"/>
                            </a>
                        </li>
                        <li className="I">
                            <a href="/#">
                                <img src={instagram} alt="can't access"/>
                            </a>
                        </li>
                        <li className="I">
                            <a href="/#">
                                <img src={whatsapp}  alt="can't access"/>
                            </a>
                        </li>
                        <li className="I">
                            <a href="/#">
                                <img src={email} alt="can't access"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        <div className="copyrights">
            <div className="informations">
                <h5>Registered Office</h5>
                <p>10:00 Am - 10:00Pm, 12A, Dr Ambedkar Salai, Rajarajeswari Nagar, Madipakkam, Chennai-600091 </p>
            </div>
            <hr/>
            <div className="rights">
                <p className="copyrights">Copyright @ 2024 Adharva Mobile All rights reserved</p>
            </div>
        </div>

    </footer>
    </div>
  )
}

export default Footer