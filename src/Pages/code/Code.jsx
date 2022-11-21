import React, { useState } from "react";
import "../../Pages/code/Code.css";
import logo from "../../assets/images/main/logo.svg";
import CodeInput from "../../components/CodeInput/CodeInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Code = () => {
  const navigate = useNavigate();
  const phoneNumber = window.localStorage.getItem('phone_number')
  const smsCode = window.localStorage.getItem('sms_code');
  console.log(smsCode)
  
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://epa.yarbek.uz/api/code/', {
        sms_code:smsCode,
        phone_number:phoneNumber,
      },{
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((res) => {
        console.log(res.data);
        // navigate('/profile2') 
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/registration1");
    }
  }, []);

  return (
    <>
      <div className="code_container">
        <div className="code_card">
          <div className="code_card_img">
            <img src={logo} alt="Logo" />
          </div>
          <form className="code_card_titles" onSubmit={onSubmit}>
            <h1>Подтверждение</h1>
            <p>
              Мы вышлем на <span>{phoneNumber}</span> бесплатное SMS с
              кодом
            </p>
            <p>Код из SMS</p>
            <CodeInput />
            <button
              className="code_card_btn"
              // onClick={() => navigate("/registration2")}
            >
              Далее
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Code;
