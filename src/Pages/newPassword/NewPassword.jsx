import React from "react";
import "../../Pages/newPassword/NewPassword.css";
import logo from "../../assets/images/main/logo.svg";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="new_password_container">
        <div className="new_password_card">
          <div className="new_password_card_img">
            <img src={logo} alt="Logo" />
          </div>
          <div className="new_password_card_titles">
            <h1>Введите новый пароль</h1>
            <p>Придумайте новый пароль не короче 6 символов</p>
          </div>
          <form className="new_password_form" action="#">
            <Input
              labelName={"Пароль"}
              inputType={"password"}
              inputId={"userPassword"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <br />
             <Input
              labelName={"Повторите новый пароль"}
              inputType={"password"}
              inputId={"userPasswordReturn"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <input onClick={() => navigate("/profile2")} className="new_password_form_btn" type="submit" value="Сохранить" />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;