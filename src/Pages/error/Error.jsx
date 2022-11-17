import React from "react";
import "../../Pages/error/Error.css";
import MainHeader from "../../components/mainHeader/MainHeader";
import pgnf from "../../assets/images/main/404.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
    
    const navigate = useNavigate()

  return (
    <>
      <MainHeader />
      <div className="error_container">
        <div className="error_card_parent">
          <div className="error_left_card">
            <img src={pgnf} alt="404" />
          </div>
          <div className="error_right_card">
            <h1>Ошибка! Cтраница не найдена..</h1>
            <p>
              Страница, на которую вы хотели перейти, не найдена. <br />  Возможно, был
              введен неверный адрес или страница <br /> была удалена.
            </p>
            <div className="error_right_card_btns">
                <button className="error_card_light_btn" onClick={() => navigate(-1)}>Назад</button>
                <button className="error_card_blue_btn" onClick={() => navigate("/")}>На главную</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;