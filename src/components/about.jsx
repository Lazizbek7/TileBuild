import React from 'react'
import "./about.css"
import about1 from "../images/about1.png"
import about2 from "../images/about2.png"
import about3 from "../images/about3.png"
import about4 from "../images/about4.png"
import about5 from "../images/about5.png"
import about6 from "../images/about6.png"
export const About = () => {
  return (
    <div id="wrapper_about">
    <div className='about'>
        <div className='in_about'>
        <p className='txt4'>Наша продукция</p>
        <div className="imgs">
          <img src={about1} alt="" />
          <img src={about2} alt="" />
          <img src={about3} alt="" />
          <img src={about4} alt="" />
          <img src={about5} alt="" />
          <img src={about6} alt="" />
        </div></div>
    </div></div>
  )
}
export default About