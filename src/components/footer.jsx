import React from 'react'
import "./footer.css"
export const Footer = () => {
  return (
    <div id="wrapper_footer">
    <div className="all_footer">
    <div className='Footer' >
    <div className="navbar">
 
      <div className="nav">     <p className='logo'>Tile<span>Build</span></p>
        <ul>
          <li><a href="">Главная</a></li>
          <li><a href="">Услуги</a></li>
          <li><a href="">Портфолио</a></li>
          <li><a href="">Контакты</a></li>
        </ul>
      </div></div>
      <div className="parties">
      <p className='Footer_lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
      <div className='Contacts'>
      <p>+998 78 148 68 68</p>
      <p>Company_name@gmail.com</p></div>
</div>
      <p className='permits' id='permits'>Все права зщищены © 2008 -2019 Tile<span>Build</span></p>
    </div>
    </div></div>
  )
}
export default Footer