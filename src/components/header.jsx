import React from 'react'
import "./header.css"
export const Header = () => {
  return (
    <header>
    <div className='Header'>
    <nav>
        <div className='logo'><p >Tile<span>Build</span> </p></div>
        <ul>
            <li> <a href="">Главная</a></li>
            <li><a href="">Услуги</a></li>
            <li><a href="">Портфолио</a></li>
            <li><a href="">Контакты</a></li>
        </ul>
        </nav>
        <p className='txt1'>Интерьерная и экстерьерная</p>
        <p className='txt2'>ПЛИТКА ДЛЯ ВАШЕГО БИЗНЕСА</p>
        <p className='txt3'>Дизайн архитектуры для нас это больше чем картинка</p>
        <a className='btn1'>Связаться</a>
    </div></header>
  )
}
export default Header