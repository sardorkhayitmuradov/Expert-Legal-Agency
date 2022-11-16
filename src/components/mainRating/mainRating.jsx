import React from "react";
import carIcon from "../../assets/images/main/car.svg";
import stocksIcon from "../../assets/images/main/stocks.svg";
import landPlotIcon from "../../assets/images/main/land plot.svg";
import gunIcon from "../../assets/images/main/gun.svg";
import timeIcon from "../../assets/images/main/time.svg";
import { useNavigate } from "react-router-dom";
import "./mainRating.css";

const MainRating = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="rating__title">ПОПУЛЯРНЫЕ ОЦЕНКИ</h2>
      <ul className="rating__list">
        <li className="rating__item">
          <img src={carIcon} alt="" className="rating__item__image" />

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
          <img src={stocksIcon} alt="" className="rating__item__image" />
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
          <img src={landPlotIcon} alt="" className="rating__item__image" />
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
          <img src={gunIcon} alt="" className="rating__item__image" />
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
      </ul>
    </>
  );
};

export default MainRating;
