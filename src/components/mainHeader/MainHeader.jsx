import React from 'react';
import '../mainHeader/mainHeader.css';
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import phone from '../../assets/images/header-phone-icon.svg';

const MainHeader = () => {
  return (
    <>
 <nav>
        <div className="main_container">
          <div className="main_navbar">
              <NavLink to="/">
                {" "}
                <ul className="navbar_left_ul">
                  <li className="nav_logo_img">
                    <img src={logo} alt="" />
                  </li>
                  <li className="nav_line"></li>
                  <li className="nav_logo_content">
                  Экспертно-Правовое <br /> Агентство
                  </li>
                </ul>
              </NavLink>
            <ul  className="navbar_right_ul">
              <li className='sign_in'>
                     <button>Вход</button>
              </li>
              <li className='sign_up'>
                     <button>Регистрация</button>
              </li>
              <li className='phone_comp'>
                    <img src={phone} alt="" />
                    <div className='phone_number'>
                      <p>+7 (800) 600-85-89</p>
                      <p>9:30 - 18:30 по МСК (ежедневно)</p>
                    </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MainHeader;