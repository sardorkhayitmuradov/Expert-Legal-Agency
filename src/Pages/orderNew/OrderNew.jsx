import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Footer from "../../components/Footer/Footer";
import "../../Pages/orderNew/OrderNew.css";
import vector from "../../assets/images/main/Vector.svg";
import statusTimeIcon from "../../assets/images/main/statusTime.svg";
import Input from "../../components/Input/Input";

const OrderNew = () => {
  const navigate = useNavigate("");
  React.useEffect(() => {
    if (
      !localStorage.getItem("login_token") &&
      !localStorage.getItem("token")
    ) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <ProfileHeader />
      <div className="oder__new__container">
        <h5 className="order__h5">
          Мои заказы -{" "}
          <span className="order__span">Легковой автомобиль №1920</span>
        </h5>
        <div className="order__new__titles">
          <div className="order__new__labels">
            <h1 className="order__h1">
              Легковой автомобиль <b className="order__b">№1920</b>
            </h1>
          </div>
          <button className="order__new__label__btn">
            <img src={vector} alt="" />
            Редактировать
          </button>
        </div>
        <div className="order__new__content">
          <div className="order__new__details">
            <h5>Детали заказа</h5>
            <ul>
              <li className="types">Создан:</li>
              <li className="back__type_1">12.02.2022</li>
            </ul>
            <ul>
              <li className="types">Тип:</li>
              <li className="back__type_2">Для получения наследства</li>
            </ul>
            <ul>
              <li className="types">Статус:</li>
              <li className="back__type_3">Новый</li>
            </ul>
            <ul>
              <li className="types">Цена:</li>
              <li className="back__type_4">1550₽</li>
            </ul>
            <h4 className="order__details__h4">Скачать файлы</h4>
            <p className="order__details__p">Чек оплаты</p>
            <ul>
              <li>
                <img src={statusTimeIcon} alt="Status-Time" loading="lazy" />
              </li>
              <li className="order__details__soon">
                Здесь скоро появятся <br /> результаты оценки
              </li>
            </ul>
          </div>
          <div className="order__new__inputs">
            <h5>Информация о заказчике</h5>
            <form className="order__new__inputs1">
              <Input
                labelName={"Фамилия"}
                inputType={"text"}
                inputId={"userFirstName"}
                placeholder={"Петров"}
                question={false}
              />
              <Input
                labelName={"Имя"}
                inputType={"text"}
                inputId={"userName"}
                placeholder={"Максим"}
                question={false}
              />
              <Input
                labelName={"Отчество"}
                inputType={"text"}
                inputId={"userSecondName"}
                placeholder={"Александрович"}
                question={false}
              />
              <Input
                labelName={"Email"}
                inputType={"email"}
                inputId={"userEmail"}
                placeholder={"example@gmail.com"}
                question={true}
              />
              <Input
                labelName={"Номер телефона"}
                inputType={"tel"}
                inputId={"userPhone"}
                placeholder={"+7 (900) 000-00-00"}
                question={false}
              />
              <Input
                labelName={"Место проживания"}
                inputType={"text"}
                inputId={"userAddress"}
                placeholder={"Москва"}
                question={true}
              />
            </form>
            <h5>Информация о собственнике</h5>
            <form className="order__new__inputs2">
              <Input
              labelName={"ФИО собственника"}
              inputType={"text"}
              inputId={"userFullName"}
              placeholder={"Иванов Иван Иванович"}
              question={true}
              />
               <Input
              labelName={"Дата смерти собственника"}
              inputType={"date"}
              inputId={"userDieDate"}
              placeholder={"22/12/2020"}
              question={false}
              />
              <Input
              labelName={"Дата смерти собственника"}
              inputType={"text"}
              inputId={"userDiePassport"}
              placeholder={"CT №550657"}
              question={false}
              />
            </form>
            <h5>Информация об автомобиле</h5>
            <form className="order__new__inputs3">
            <Input
              labelName={"VIN"}
              inputType={"text"}
              inputId={"userCarVin"}
              placeholder={"4567890987NG"}
              question={true}
              />
               <Input
              labelName={"Марка и модель автомобиля"}
              inputType={"text"}
              inputId={"userCardMark"}
              placeholder={"Ba3 (LADA) Priora"}
              question={true}
              />
               <Input
              labelName={"Год выпуска"}
              inputType={"text"}
              inputId={"userCardYear"}
              placeholder={"1950"}
              question={true}
              />
               <Input
              labelName={"Место нотариальных действий"}
              inputType={"text"}
              inputId={"userNotaialPlace"}
              placeholder={"Москва"}
              question={true}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderNew;
