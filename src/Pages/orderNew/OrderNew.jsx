import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Footer from "../../components/Footer/Footer";
import "../../Pages/orderNew/OrderNew.css";
import vector from "../../assets/images/main/Vector.svg";
import statusTimeIcon from '../../assets/images/main/statusTime.svg'

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
              <li><img src={statusTimeIcon} alt="Status-Time" loading="lazy"/></li>
              <li className="order__details__soon">Здесь скоро появятся <br /> результаты оценки</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderNew;
