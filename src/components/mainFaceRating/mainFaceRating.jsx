import React, { useEffect, useState } from "react";
import flatIcon from "../../assets/images/main/flat.svg";
import landPilotIcon from "../../assets/images/main/land plot.svg";
import houseIcon from "../../assets/images/main/house.svg";
import garageIcon from "../../assets/images/main/garage.svg";
import houseWithPilot from "../../assets/images/main/house-with-land-plot.svg";
import wareHouseIcon from "../../assets/images/main/warehouse.svg";
import timeIcon from "../../assets/images/main/time.svg";
import { useNavigate } from "react-router-dom";
import "./mainFaceRating.css";
import axios from "axios";

const MainFaceRating = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://epa.yarbek.uz/api/products/")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data.results);
  

  const filterTypes = (categoryItem) => {
    const result = data.results.filter((el) => {
      return (el.name = categoryItem);
    });
    console.log(result);
  };


  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
};

export default MainFaceRating;
