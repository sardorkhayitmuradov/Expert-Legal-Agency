import React, { useState } from "react";
import "../../Pages/newPassword/NewPassword.css";
import logo from "../../assets/images/main/logo.svg";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPassword = () => {
  const navigate = useNavigate();
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const changeToken = window.localStorage.getItem("change_token");
  const notify = () => toast("Oops! Something get wrong! Please again...");

  const onPassword1 = (value) => {
    console.log(value);
    setPassword1(value);
  };

  const onPassword2 = (value) => {
    console.log(value);
    setPassword2(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://epa.yarbek.uz/api/new/password/",
        {
          new_password: password1,
          confirm_password: password2,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${changeToken}`,
          },
        }
      )
      .then((res) => {
        notify();
        
      })
      .catch((err) => {
        console.log(err);
      });
    setPassword1("");
    setPassword2("");
  };

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
          <form className="new_password_form" onSubmit={onSubmit}>
            <Input
              labelName={"Пароль"}
              inputType={"password"}
              inputId={"userPassword"}
              descValue={"uft_pole_name"}
              onGetValue={onPassword1}
              value={password1}
              question={false}
            />
            <br />
            <Input
              labelName={"Повторите новый пароль"}
              inputType={"password"}
              inputId={"userPasswordReturn"}
              descValue={"uft_pole_name"}
              onGetValue={onPassword2}
              value={password2}
              question={false}
            />
            <input
              className="new_password_form_btn"
              type="submit"
              value="Сохранить"
            />
            
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
