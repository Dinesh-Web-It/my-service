import React from 'react'
import './ServiceContent.css'
import Display from '../Assets/Home screen-rafiki.png'
import Water from '../Assets/water-damage-repair.png'
import Software from '../Assets/software update.jpg'
import Battery from '../Assets/battery-replacement.png'
import Motherbord from '../Assets/motherboard-repair.png'

const ServiceContent = () => {
  return (
    <div>
        <div className="container5">
        <div className="head">
            <h1>Service Available</h1>
        </div>

        <div className="content1">
            <img src={Display} alt='' data-aos="zoom-in" data-aos-duration="1200"/>
            <div className="div" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2>Display changing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eaque quibusdam quisquam hic quod
                    veniam
                    asperiores esse autem neque officia aperiam rem quia provident rerum unde, maxime ipsum voluptate
                    pariatur! lorem40</p>
            </div>
        </div>
        <div className="content1">
            <img src={Water} alt='' data-aos="zoom-in" data-aos-duration="1200"/>
            <div className="div" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2>Water damage</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eaque quibusdam quisquam hic quod
                    veniam
                    asperiores esse autem neque officia aperiam rem quia provident rerum unde, maxime ipsum voluptate
                    pariatur! lorem40</p>
            </div>
        </div>

        <div className="content1">
            <img src={Software} id="soft" alt='' data-aos="zoom-in" data-aos-duration="1200"/>
            <div className="div" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2>Software Update</h2>
                <p id="two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur, iure laudantium
                    temporibus
                    laboriosam quia.</p>
            </div>
        </div>

        <div className="content1">
            <img src={Battery} alt='' data-aos="zoom-in" data-aos-duration="1200"/>
            <div className="div" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2>Battery Changing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio dolore et maxime ad
                    consequatur.
                </p>
            </div>
        </div>

        <div className="content1">
            <img src={Motherbord} id="img" alt='' data-aos="zoom-in" data-aos-duration="1200"/>
            <div className="div" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2>Mother-board Issue</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio dolore et maxime ad
                    consequatur.
                </p>
            </div>
        </div>
    </div>

    <hr/>
    </div>
  )
}

export default ServiceContent