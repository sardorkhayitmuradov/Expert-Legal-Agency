import React from "react";
import "../../Pages/registration1/Registration1.css";
import logo from "../../assets/images/main/logo.svg";
import { Link } from "react-router-dom";

const Registration1 = () => {
  return (
    <>
      <div className="registration1_container">
        <div className="registration1_card">
          <div className="reg1_logo_div">
            <img src={logo} alt="Logo-image" />
          </div>
          <h1>Регистрация профиля</h1>
          <form className="reg1_form" action="#">
            <label htmlFor="#">Номер телефона</label>
            <input type="tel" placeholder="+7 (900) 000-00-00" required />
            <p>uft_pole_name</p>
            <label htmlFor="#">
              Email <span className="reg1_form_span">(необязательно)</span>
            </label>
            <input type="email" placeholder="example@gmail.com" required />
            <p>uft_pole_name</p>
            <label htmlFor="#">Пароль</label>
            <input type="password" />
            <p>uft_pole_name</p>
            <label className="reg1_form_hint" htmlFor="#">
              Повторите пароль
            </label>
            <input type="password" required />
            <p>uft_pole_name</p>
            <p className="reg1_form_p2">
              Нажимая на кнопку “Зарегистрироваться”, вы соглашаетесь на
           <span className="reg1_form_span2"> обработку персональных данных.</span>
            </p>
            <input className="reg1_form_btn" type="submit" value="Сохранить" />
            <Link to="/" className="reg1_form_link">Уже зарегистрированы? Войти</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration1;
