import React from "react";
import "../../Pages/registration2/Registration2.css";
import logo from "../../assets/images/main/logo.svg";
import Input from "../../components/Input/Input";

const Registration2 = () => {
  return (
    <>
      <div className="registration2_container">
        <div className="registration2_card">
          <div className="reg2_logo_div">
            <img src={logo} alt="Logo" />
          </div>
          <h1>Заполнение профиля</h1>
          <p className="reg2_p">
            Заполните следующие поля, чтобы завершить регистрацию
          </p>
          <br />
          <form className="reg2_form" action="#">
            <Input
              labelName={"Фамилия"}
              inputType={"text"}
              inputId={"userSurname"}
              placeholder={"Иванов"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <br />
            <Input
              labelName={"Имя"}
              inputType={"text"}
              inputId={"userName"}
              placeholder={"Иван"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <br />
              <Input
              labelName={"Отчество"}
              inputType={"text"}
              inputId={"userSecondName"}
              placeholder={"Иванович"}
              descValue={"uft_pole_name"}
              question={false}
            />
            <br />
                 <Input
              labelName={"Место проживания"}
              inputType={"text"}
              inputId={"userAddress"}
              placeholder={"Москва, Липецкая область"}
              descValue={"uft_pole_name"}
              question={true}
            />
            <input className="reg2_form_btn" type="submit" value="Сохранить" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration2;