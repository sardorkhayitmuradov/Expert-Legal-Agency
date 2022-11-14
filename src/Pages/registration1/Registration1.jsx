import React from "react";
import "../../Pages/registration1/Registration1.css";
import logo from "../../assets/images/main/logo.svg";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

const Registration1 = () => {
  return (
    <>
      <div className='registration1_container'>
        <div className='registration1_card'>
          <div className='reg1_logo_div'>
            <img src={logo} alt='Logo' />
          </div>
          <h1>Регистрация профиля</h1>
          <br />
          <form className="reg1_form" action="#">
            <Input
              labelName={"Номер телефона"}
              inputType={"tel"}
              inputId={"userPhone"}
              placeholder={"+7 (900) 000-00-00"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <br />
            <Input
              labelName={"Email (необязательно)"}
              inputType={"email"}
              inputId={"userEmail"}
              placeholder={"example@gmail.com"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <br />
            <Input
              labelName={"Пароль"}
              inputType={"password"}
              inputId={"userPassword"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <br />
             <Input
              labelName={"Повторите пароль"}
              inputType={"password"}
              inputId={"userPasswordReturn"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <p className="reg1_form_p2">
              Нажимая на кнопку “Зарегистрироваться”, вы соглашаетесь на
              <span className="reg1_form_span2">
                {" "}
                обработку персональных данных.
              </span>
            </p>
            <input className="reg1_form_btn" type="submit" value="Сохранить" />
            <Link to="/" className="reg1_form_link">
              Уже зарегистрированы? Войти
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration1;