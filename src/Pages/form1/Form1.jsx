import React from "react";
import Card from "../../components/Card/Card";
import MainHeader from "../../components/mainHeader/MainHeader";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";
import progressIcon from "../../assets/images/main/progress.svg";
import infoIcon from "../../assets/images/main/info.svg";
import "./Form1.css";
import { useNavigate } from "react-router-dom";

const Form1 = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("login_token") && !localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <MainHeader />
      <main className="main">
        <section className="form1">
          <div className="container form1-container">
            <Card>
              <div className="card-important">
                <h3 className="card-important-title">Для заполнения нужен:</h3>
                <div className="card-important-wrapper">
                  <img src={infoIcon} alt="Info" />
                  <p className="card-important-wrapper-desc">
                    Паспорт транспортного средства
                  </p>
                </div>
              </div>
            </Card>
            <form className="process process-wrapper">
              <div className="procces-header">
                <img
                  src={progressIcon}
                  alt=""
                  className="process-header-image"
                />
                <div className="process-header-infos">
                  <h2 className="header-title">Шаг 1 из 4. Общая информация</h2>
                  <p className="header-desc">
                    Заполните общую информацию для получения электронной оценки.
                  </p>
                </div>
              </div>
              <div className="process-rating">
                <h3 className="rating-title">Выберите направление оценки</h3>
                <div className="rating-radios">
                  <div className="radio-wrapper">
                    <input
                      type="radio"
                      id="inheritance"
                      name="radios"
                      value="Для получения наследства"
                    />
                    <label htmlFor="inheritance" className="radio-label">
                      Для получения наследства
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      type="radio"
                      id="devide"
                      name="radios"
                      value="Для раздела имущества"
                    />
                    <label htmlFor="devide" className="radio-label">
                      Для раздела имущества
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      type="radio"
                      id="money"
                      name="radios"
                      value="Для получения"
                    />
                    <label htmlFor="money" className="radio-label">
                      Для получения
                    </label>
                  </div>
                </div>
              </div>
              <div className="process-info">
                <div className="customer-info">
                  <h3 className="customer-info-title">
                    Информация о заказчике
                  </h3>
                  <div className="coustomer-inputs">
                    <div className="inputs-top">
                      <Input
                        labelName={"Фамилия"}
                        inputType={"text"}
                        inputId={"userLastName"}
                        placeholder={"Петров"}
                        descValue={"uft_pole_name"}
                        question={false}
                      />
                      <Input
                        labelName={"Имя"}
                        inputType={"text"}
                        inputId={"userFirstName"}
                        placeholder={"Максим"}
                        descValue={"uft_pole_name"}
                        question={false}
                      />
                      <Input
                        labelName={"Отчество"}
                        inputType={"text"}
                        inputId={"userMiddleName"}
                        placeholder={"Александрович"}
                        descValue={"uft_pole_name"}
                        question={false}
                      />
                    </div>
                    <div className="inputs-top">
                      <Input
                        labelName={"Email"}
                        inputType={"email"}
                        inputId={"userEmail"}
                        placeholder={"example@gmail.com"}
                        descValue={"uft_pole_name"}
                        question={true}
                      />
                      <Input
                        labelName={"Номер телефона"}
                        inputType={"tel"}
                        inputId={"UserPhoneNumber"}
                        placeholder={"+7 (900) 000-00-00"}
                        descValue={"Этот номер телефона уже используется"}
                        question={false}
                      />
                      <Input
                        labelName={"Место проживания"}
                        inputType={"text"}
                        inputId={"userPlace"}
                        placeholder={"Москва, Липецкая область"}
                        descValue={"uft_pole_name"}
                        question={true}
                      />
                    </div>
                  </div>
                </div>
                <span className="hr"></span>
                <div className="owner-info">
                  <h3 className="owner-info-title">
                    Информация о собственнике
                  </h3>
                  <div className="owner-inputs">
                    <Input
                      labelName={"ФИО собственника"}
                      inputType={"text"}
                      inputId={"ownerFullName"}
                      placeholder={"Иванов Иван Иванович"}
                      descValue={"uft_pole_name"}
                      question={true}
                    />
                    <Input
                      labelName={"Дата смерти собственника"}
                      inputType={"date"}
                      inputId={"ownerDeathDate"}
                      placeholder={"22/12/2020"}
                      descValue={"uft_pole_name"}
                      question={false}
                    />
                    <Input
                      labelName={"Свидетельство о смерти №"}
                      inputType={"text"}
                      inputId={"ownerDeathDate"}
                      placeholder={"СТ №550657"}
                      descValue={"uft_pole_name"}
                      question={false}
                    />
                  </div>
                </div>
                <span className="hr"></span>
                <div className="about-car">
                  <div className="car-left">
                    <h3 className="car-left-title">
                      Запрос информации об автомобиле
                    </h3>
                    <p className="car-left-desc">
                      Вы можете запросить информацию о ТС. Это позволит
                      автоматически заполнить часть полей об автомобиле.
                    </p>
                  </div>
                  <div className="car-right">
                    <div className="car-right-top">
                      <h4 className="right-top-title">
                        Выберите тип идентификатора
                      </h4>
                      <div className="right-top-btns">
                        <button className="top-btns-btn">VIN</button>
                        <button className="top-btns-btn">Номер кузова</button>
                        <button className="top-btns-btn">Гос. номера</button>
                      </div>
                    </div>
                    <div className="car-right-bottom">
                      <Input
                        labelName={"VIN"}
                        inputType={"text"}
                        inputId={"carVIN"}
                        placeholder={"4567890987NG"}
                        descValue={"uft_pole_name"}
                        question={true}
                      />
                      <button className="right-bottom-btn">
                        Запросить информацию
                      </button>
                    </div>
                  </div>
                </div>
                <span className="hr"></span>
                <div className="yourself">
                  <h3 className="yourself-title">Заполнить самостоятельно</h3>

                  <div className="yourself-inputs">
                    <Input
                      labelName={"VIN"}
                      inputType={"text"}
                      inputId={"carVIN"}
                      placeholder={"4567890987NG"}
                      descValue={"uft_pole_name"}
                      question={true}
                    />
                    <Input
                      labelName={"Марка и модель автомобиля"}
                      inputType={"text"}
                      inputId={"carModel"}
                      placeholder={"Пример: ВАЗ (LADA) Priora"}
                      descValue={"uft_pole_name"}
                      question={true}
                    />
                    <Input
                      labelName={"Год выпуска"}
                      inputType={"number"}
                      inputId={"carYear"}
                      placeholder={"1950"}
                      descValue={"uft_pole_name"}
                      question={true}
                    />
                    <Input
                      labelName={"Место нотариальных действий"}
                      inputType={"text"}
                      inputId={"carNotarius"}
                      placeholder={"Москва, Липецкая область"}
                      descValue={"uft_pole_name"}
                      question={true}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/form2")}
                type="submit"
                className="form-btn"
              >
                Далее
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Form1;
