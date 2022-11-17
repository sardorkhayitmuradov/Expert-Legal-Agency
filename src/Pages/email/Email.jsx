import React, { useState } from "react";
import "../../Pages/email/Email.css";
import logo from "../../assets/images/main/logo.svg";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import axios from "axios";

const Email = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://maruf.pythonanywhere.com/api/email/", {
        email: email,
      })
      .then((res) => {
        const emailToken = res.data.msg;
        if(!res.data.msg){
          window.localStorage.setItem('token', emailToken)
          navigate('/emailcode')
        }else(
          console.log("Email Account error!")
        )
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
  };

  const onEmail = (value) => {
    console.log(value);
    setEmail(value);
  };

  return (
    <>
      <div className="email_form_container">
        <div className="email_form_card">
          <div className="email_form_img">
            <img src={logo} alt="Logo" />
          </div>
          <div className="email_form_label">
            <h1>Сброс пароля</h1>
            <p>Введите ваш email для восстановления доступа</p>
          </div>
          <form action="#" className="email_form" onSubmit={onSubmit}>
            <Input
              labelName={"Email"}
              inputType={"email"}
              inputId={"userEmail"}
              placeholder={"example@gmail.com"}
              descValue={"uft_pole_name"}
              question={false}
              value={email}
              onGetValue={onEmail}
            />
            <input
              // onClick={() => navigate("/emailcode")}
              type="submit"
              value={"Далее"}
              className="email_form_btn"
            />
            <span
              className="email_form_navigate"
              onClick={() => navigate("/password")}
            >
              Сброс пароля по номеру телефона
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Email;
