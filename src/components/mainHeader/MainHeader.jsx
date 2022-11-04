import React from 'react';
import '../mainHeader/mainHeader.css';
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.svg';

const MainHeader = () => {
  return (
    <>
 <nav>
        <div className="main_container">
          <div className="main_navbar">
            <div className="navbar_left-side">
              <NavLink to="/">
                {" "}
                <ul className="navbar_left_ul">
                  <li className="nav_logo_img">
                    <img src={logo} alt="" />
                  </li>
                  <li className="nav_line"></li>
                  <li className="nav_logo_content">
                  Экспертно-Правовое Агентство
                  </li>
                </ul>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MainHeader;