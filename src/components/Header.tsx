import React from "react"
import './Header.css'


const Header: React.FC = () => {
   return (
      <div className="header">
         
         <a href="https://google.com" className="header__logo">Аutoparts</a>

         <nav className="header_menu">
            <ul className="menu__list">
               <li className="menu__item">
                  <a href="#" className="menu__link">Акции</a>
               </li>
               <li className="menu__item">
                  <a href="#" className="menu__link">Услуги</a>
               </li>
               <li className="menu__item">
                  <a href="#" className="menu__link">О нас</a>
               </li>
               <li className="menu__item">
                  <a href="#" className="menu__link">Контакты</a>
               </li>
            </ul>
         </nav>





      </div>
   )
}

export default Header;