import React from "react";
import "../../components/ProfileHeader/ProfileHeader.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/main/logo.svg";
import setting from "../../assets/images/main/setting.svg";
import help from "../../assets/images/main/help.svg";
import logout from "../../assets/images/main/logout.svg";

const ProfileHeader = () => {
  return (
    <>
      <nav>
        <div className="profile__header__container">
          <div className="profile__header__navbar">
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
            <ul className="profile__header__ul">
              <li>
                <NavLink to={'/profile2'} className="profile__header__ul__link">
                  Мои заказы
                </NavLink>
              </li>
              <li>
                <NavLink to={'/services'} className="profile__header__ul__link">
                  Заказать оценку
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className="profile__header__ul__link">
                  О компании
                </NavLink>
              </li>
              <li>
                <div className="profile__header__dropdown">
                  <button className="dropdown__btn">
                    Максим П.{" "}
                    <span className="dropdown__btn__span">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-compact-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="profile__header__dropdown__content">
                    <Link className="dropdown__content__links" to="/setting">
                      {" "}
                      <img src={setting} alt="Setting" /> <span>Настройки</span>
                    </Link>

                    <Link to="/fqa" className="dropdown__content__links">
                      <img src={help} alt="Help" />
                      <span>Помощь</span>
                    </Link>
                    <a className="dropdown__content__links">
                      <img src={logout} alt="LogOut" />
                      <span>Выйти</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ProfileHeader;
