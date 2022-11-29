import React, { useState } from "react";
import Card from "../../components/Card/Card";
import MainHeader from "../../components/mainHeader/MainHeader";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";
import progressIcon from "../../assets/images/main/progress.svg";
import infoIcon from "../../assets/images/main/info.svg";
import "./Form1.css";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import axios from "axios";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";

const Form1 = ({ setOpen }) => {
  const notify = () => toast("Oops! Something get wrong! Please again...");
  const [loginToken, setLoginToken] = useState(
    window.localStorage.getItem("login_token")
  );
  const navigate = useNavigate();
  // form1 start
  const [chooseTheDirection, setChooseTheDirection] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [placeResidence, setPlaceResidence] = useState("");
  const [fullNameOwner, setFullNameOwner] = useState("");
  const [ownewDateDeath, setOwnerDateDeath] = useState("");
  const [deathCertificate, setDeathCertificate] = useState("");
  const [vin, setVin] = useState("");
  const [modelCar, setModelCar] = useState("");
  const [yearIssue, setYearIssue] = useState("");
  const [notarilaPlace, setNotarialPlace] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://epa.yarbek.uz/api/create/order/",
        {
          status: status,
          choose_the_direction_of_assessment: chooseTheDirection,
          last_name: lastName,
          first_name: firstName,
          patronymic: secondName,
          email: email,
          phone_number: phone,
          place_residence: placeResidence,
          full_name_owner: fullNameOwner,
          owner_date_death: ownewDateDeath,
          death_certificate: deathCertificate,
          vin: vin,
          model_car: modelCar,
          year_issue: yearIssue,
          notarial_place: notarilaPlace,
          img: image,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${loginToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === 1) {
          window.localStorage.getItem("login_token");
          navigate("/form2");
        }
        if (res.data.status !== 1) {
          navigate("/");
          setOpen(true);
          notify();
        }
      })
      .catch((err) => {
        notify(err);
      });
  };

  const onLastName = (value) => {
    console.log(value);
    setLastName(value);
  };

  const onFirstName = (value) => {
    console.log(value);
    setFirstName(value);
  };

  const onSecondName = (value) => {
    console.log(value);
    setSecondName(value);
  };

  const onEmail = (value) => {
    console.log(value);
    setEmail(value);
  };

  const onPhone = (value) => {
    console.log(value);
    setPhone(value);
  };

  const onPlaceResidence = (value) => {
    console.log(value);
    setPlaceResidence(value);
  };

  const onOwnerFullName = (value) => {
    console.log(value);
    setFullNameOwner(value);
  };

  const onOwnerDateDeath = (value) => {
    console.log(value);
    setOwnerDateDeath(value);
  };

  const onDeathCertificate = (value) => {
    console.log(value);
    setDeathCertificate(value);
  };

  const onVin = (value) => {
    console.log(value);
    setVin(value);
  };

  const onModalCar = (value) => {
    console.log(value);
    setModelCar(value);
  };

  const onYearIssue = (value) => {
    console.log(value);
    setYearIssue(value);
  };

  const onNotarialPlace = (value) => {
    console.log(value);
    setNotarialPlace(value);
  };

  useEffect(() => {
    if (!localStorage.getItem("login_token")) {
      navigate("/");
    }
  }, [loginToken]);

  return (
    <>
      {!localStorage.getItem("login_token") ? (
        <MainHeader />
      ) : (
        <ProfileHeader />
      )}
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
                      value={1}
                      onChange={(e) => {
                        setChooseTheDirection(e.target.value);
                      }}
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
                      value={2}
                      onChange={(e) => setChooseTheDirection(e.target.value)}
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
                      value={3}
                      onChange={(e) => setChooseTheDirection(e.target.value)}
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
                        onGetValue={onLastName}
                        value={lastName}
                      />
                      <Input
                        labelName={"Имя"}
                        inputType={"text"}
                        inputId={"userFirstName"}
                        placeholder={"Максим"}
                        descValue={"uft_pole_name"}
                        question={false}
                        onGetValue={onFirstName}
                        value={firstName}
                      />
                      <Input
                        labelName={"Отчество"}
                        inputType={"text"}
                        inputId={"userMiddleName"}
                        placeholder={"Александрович"}
                        descValue={"uft_pole_name"}
                        question={false}
                        onGetValue={onSecondName}
                        value={secondName}
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
                        onGetValue={onEmail}
                        value={email}
                      />
                      <Input
                        labelName={"Номер телефона"}
                        inputType={"tel"}
                        inputId={"UserPhoneNumber"}
                        placeholder={"+7 (900) 000-00-00"}
                        descValue={"Этот номер телефона уже используется"}
                        question={false}
                        onGetValue={onPhone}
                        value={phone}
                      />
                      <Input
                        labelName={"Место проживания"}
                        inputType={"text"}
                        inputId={"userPlace"}
                        placeholder={"Москва, Липецкая область"}
                        descValue={"uft_pole_name"}
                        question={true}
                        onGetValue={onPlaceResidence}
                        value={placeResidence}
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
                      onGetValue={onOwnerFullName}
                      value={fullNameOwner}
                    />
                    <Input
                      labelName={"Дата смерти собственника"}
                      inputType={"date"}
                      inputId={"ownerDeathDate"}
                      placeholder={"22/12/2020"}
                      descValue={"uft_pole_name"}
                      question={false}
                      onGetValue={onOwnerDateDeath}
                      value={ownewDateDeath}
                    />
                    <Input
                      labelName={"Свидетельство о смерти №"}
                      inputType={"text"}
                      inputId={"ownerDeathDate"}
                      placeholder={"СТ №550657"}
                      descValue={"uft_pole_name"}
                      question={false}
                      onGetValue={onDeathCertificate}
                      value={deathCertificate}
                    />
                  </div>
                </div>
                <span className="hr"></span>
                {/* <div className="about-car">
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
                </div> */}
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
                      onGetValue={onVin}
                      value={vin}
                    />
                    <Input
                      labelName={"Марка и модель автомобиля"}
                      inputType={"text"}
                      inputId={"carModel"}
                      placeholder={"Пример: ВАЗ (LADA) Priora"}
                      descValue={"uft_pole_name"}
                      question={true}
                      onGetValue={onModalCar}
                      value={modelCar}
                    />
                    <Input
                      labelName={"Год выпуска"}
                      inputType={"number"}
                      inputId={"carYear"}
                      placeholder={"1950"}
                      descValue={"uft_pole_name"}
                      question={true}
                      onGetValue={onYearIssue}
                      value={yearIssue}
                    />
                    <Input
                      labelName={"Место нотариальных действий"}
                      inputType={"text"}
                      inputId={"carNotarius"}
                      placeholder={"Москва, Липецкая область"}
                      descValue={"uft_pole_name"}
                      question={true}
                      onGetValue={onNotarialPlace}
                      value={notarilaPlace}
                    />
                    <label>Photo Your Password →</label>
                    <input
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                      value={image}
                      type="file"
                      className="file__image__input"
                    />
                  </div>
                </div>
              </div>
              <div className="checkbox__btn_parent">
                <Tooltip title="Этот поле является обязательным!">
                  <div className="status__parent__div">
                    <input
                      className="status__radio"
                      type="checkbox"
                      value={1}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label className="status__label" htmlFor="#">
                      Я принимаю все условия пользовательского соглашения
                    </label>
                  </div>
                </Tooltip>
                <button
                  disabled={!status}
                  onClick={onSubmit}
                  type="submit"
                  className="form-btn"
                >
                  Далее
                </button>
              </div>
              <Toaster
                toastOptions={{
                  style: {
                    background: "#073ba1",
                    padding: "16px",
                    color: "#fff",
                  },
                }}
              />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Form1;
