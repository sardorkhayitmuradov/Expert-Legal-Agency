import React from "react";
import "../../Pages/personal/Personal.css";
import logo from "../../assets/images/main/logo.svg";

const Personal = () => {
  return (
    <>
      <div className="personal_container">
        <div className="personal_card">
          <div className="personal_card_logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="personal_card_content">
            <h1>Восстановление</h1>
            <p>По данному номеру телефону указаны следующие данные:</p>
            <h3>Петров М. А.</h3>
           <div className="personal_card_btns">
           <button className="personal_card_btn1">Это не мои данные</button>
            <button className="personal_card_btn2">Войти</button>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
