import React from 'react'
import "./header.css"
export const Header = () => {
  return (
    <div id="wrapper_header">
    <header>
    <div className='Header'>
    <nav>
        <div className='logo'><p >Tile<span>Build</span> </p></div>
        <ul>
            <li> <a href="#wrapper_header">Главная</a></li>
            <li><a href="#wrapper_about">Услуги</a></li>
            <li><a href="#wrapper_main">Портфолио</a></li>
            <li><a href="#wrapper_footer">Контакты</a></li>
        </ul>
        </nav>
        <p className='txt1'>Интерьерная и экстерьерная</p>
        <p className='txt2'>ПЛИТКА ДЛЯ ВАШЕГО БИЗНЕСА</p>
        <p className='txt3'>Дизайн архитектуры для нас это больше чем картинка</p>
        <a className='btn1'>Связаться</a>
    </div></header></div>
  )
}
export default Header