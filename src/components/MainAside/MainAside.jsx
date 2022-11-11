import React from "react";
import "../MainAside/mainAside.css";
import phone from "../../assets/images/main/phone-contact.png";
import Input from "../Input/Input";

const MainAside = () => {
  return (
    <>
      <div className="main_aside">
        <div className="main_aside_container">
          <div className="main_aside_parent">
            <h1>НУЖНА ПОМОЩЬ ИЛИ ОСТАЛИСЬ ВОПРОСЫ?</h1>
            <div className="main_aside_form">
              <div className="main_aside_form_left">
                <p className="main_p">
                  Заполните форму и наш менеджер свяжется с вами <br /> для
                  бесплатной консультации по интересующим вопросам.
                </p>
                <form className="main_form_div" action="#">
                  <div className="main_input_left">
                    <Input
                      labelName={"Имя"}
                      inputType={"text"}
                      inputId={"userName"}
                      placeholder={"Иван"}
                      descValue={"uft_pole_name"}
                      question={false}
                    />
                  </div>
                  <div className="main_input_right">
                    <Input
                      labelName={"Номер телефона"}
                      inputType={"tel"}
                      inputId={"userPhone"}
                      placeholder={"+7 (900) 000-00-00"}
                      descValue={"uft_pole_name"}
                      question={false}
                    />
                  </div>
                </form>
                <div className="main_aside_button">
                  <p>
                    Нажимая на кнопку, вы соглашаетесь на обработку <br />{" "}
                    персональных данных.
                  </p>
                  <button>Отправить</button>
                </div>
              </div>
              <div className="main_aside_form_right">
                <img src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAside;