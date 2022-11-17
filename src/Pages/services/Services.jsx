import React from "react";
import "../services/Services.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Footer from "../../components/Footer/Footer";
import flatIcon from "../../assets/images/main/flat.svg";
import landPilotIcon from "../../assets/images/main/land plot.svg";
import houseIcon from "../../assets/images/main/house.svg";
import garageIcon from "../../assets/images/main/garage.svg";
import houseWithPilot from "../../assets/images/main/house-with-land-plot.svg";
import wareHouseIcon from "../../assets/images/main/warehouse.svg";
import timeIcon from "../../assets/images/main/time.svg";
import success from "../../assets/images/main/checkbox-success.svg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProfileHeader />
      <div className="sevices__container">
        <div className="services__open__natarius__parent">
          <div className="services__open__natarius__left">
            <div className="services__left__title">
              <img src={success} alt="Success" />
              <h3>У вас есть привязка к Нотариусу</h3>
            </div>
            <p className="services__left__desc">
              Ваши оценки автоматически передаются указанному Нотариусу,
              дополнительная отправка результатов не требуется. Если это не Ваш
              нотариус, открепите привязку.
            </p>
            <button className="services__left_btn" onClick={() => navigate("/profile2")}>Открепить Нотариуса</button>
          </div>
          <div className="services__open__natarius__right">
            <div className="services__right_title services__user">
              <h4>Ваш Нотариус:</h4> <h4>Аксенов Иван Владимирович</h4>
            </div>
            <br />
            <h4 className="services__right__contact__data">
              Контактные данные:
            </h4>
            <div className="services__right_title1">
              <h4>Телефон:</h4> <span>+7 (900) 000-00-00</span>
            </div>
            <div className="services__right_title2">
              <h4>Email:</h4> <span>example@gmail.com</span>
            </div>
            <div className="services__right_title3">
              <h4>Адрес:</h4> <span>Подольск, ул. Сталина, 14</span>
            </div>
          </div>
        </div>
        <h2 className="rating__title">ЗАКАЗАТЬ ОЦЕНКУ</h2>
        <div className="rating__nav">
          <p className="rating__nav__title">Недвижимое имущество</p>
          <p className="rating__nav__title">Активы и аренда</p>
          <p className="rating__nav__title">Движимое имущество</p>
        </div>
        <ul className="rating__list">
          <li className="rating__item">
            <img src={flatIcon} alt="" className="rating__item__image" />

            <div className="rating__image__info">
              <h4 className="rating__item__title">Легковой автомобиль</h4>
              <span className="rating__info__wrapper">
                <img
                  src={timeIcon}
                  alt=""
                  width="24px"
                  height="24px"
                  style={{ marginRight: "6px" }}
                />{" "}
                Срок изготовления — 1 час
              </span>
              <div className="rating__item__bottom">
                <p className="rating__item__price">1100₽</p>
                <button
                  className="rating__item__button"
                  onClick={() => navigate("/form1")}
                >
                  Заказать &gt;
                </button>
              </div>
            </div>
          </li>
          <li className="rating__item">
            <img src={garageIcon} alt="" className="rating__item__image" />
            <div className="rating__image__info">
              <h4 className="rating__item__title">Акции</h4>

              <span className="rating__info__wrapper">
                <img
                  src={timeIcon}
                  alt=""
                  width="24px"
                  height="24px"
                  style={{ marginRight: "6px" }}
                />{" "}
                Срок изготовления — 1 час
              </span>
              <div className="rating__item__bottom">
                <p className="rating__item__price">1100₽</p>
                <button
                  className="rating__item__button"
                  onClick={() => navigate("/form1")}
                >
                  Заказать &gt;
                </button>
              </div>
            </div>
          </li>
          <li className="rating__item">
            <img src={landPilotIcon} alt="" className="rating__item__image" />
            <div className="rating__image__info">
              <h4 className="rating__item__title">Земельный участок</h4>
              <span className="rating__info__wrapper">
                <img
                  src={timeIcon}
                  alt=""
                  width="24px"
                  height="24px"
                  style={{ marginRight: "6px" }}
                />{" "}
                Срок изготовления — 1 час
              </span>
              <div className="rating__item__bottom">
                <p className="rating__item__price">1100₽</p>
                <button
                  className="rating__item__button"
                  onClick={() => navigate("/form1")}
                >
                  Заказать &gt;
                </button>
              </div>
            </div>
          </li>
          <li className="rating__item">
            <img src={houseWithPilot} alt="" className="rating__item__image" />
            <div className="rating__image__info">
              <h4 className="rating__item__title">Оружие</h4>
              <span className="rating__info__wrapper">
                <img
                  src={timeIcon}
                  alt=""
                  width="24px"
                  height="24px"
                  style={{ marginRight: "6px" }}
                />{" "}
                Срок изготовления — 1 час
              </span>
              <div className="rating__item__bottom">
                <p className="rating__item__price">1100₽</p>
                <button
                  className="rating__item__button"
                  onClick={() => navigate("/form1")}
                >
                  Заказать &gt;
                </button>
              </div>
            </div>
          </li>
          <li className="rating__item">
            <img src={houseIcon} alt="" className="rating__item__image" />

            <div className="rating__image__info">
              <h4 className="rating__item__title">Легковой автомобиль</h4>
              <span className="rating__info__wrapper">
                <img
                  src={timeIcon}
                  alt=""
                  width="24px"
                  height="24px"
                  style={{ marginRight: "6px" }}
                />{" "}
                Срок изготовления — 1 час
              </span>
              <div className="rating__item__bottom">
                <p className="rating__item__price">1100₽</p>
                <button
                  className="rating__item__button"
                  onClick={() => navigate("/form1")}
                >
                  Заказать &gt;
                </button>
              </div>
            </div>
          </li>
          <li className="rating__item">
            <img src={wareHouseIcon} alt="" className="rating__item__image" />

            <div className="rating__image__info">
              <h4 className="rating__item__title">Легковой автомобиль</h4>
              <span className="rating__info__wrapper">
                <img
                  src={timeIcon}
                  alt=""
                  width="24px"
                  height="24px"
                  style={{ marginRight: "6px" }}
                />{" "}
                Срок изготовления — 1 час
              </span>
              <div className="rating__item__bottom">
                <p className="rating__item__price">1100₽</p>
                <button
                  className="rating__item__button"
                  onClick={() => navigate("/form1")}
                >
                  Заказать &gt;
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Services;
