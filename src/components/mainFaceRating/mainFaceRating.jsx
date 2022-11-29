import React, { useEffect, useState } from "react";
import timeIcon from "../../assets/images/main/time.svg";
import { useNavigate } from "react-router-dom";
import "./mainFaceRating.css";
import axios from "axios";
import { Link } from "react-router-dom";

const MainFaceRating = () => {
  const [data, setData] = useState([]);

  let url = "http://epa.yarbek.uz/api/products/";

  function filterData(assets = "") {
    axios
      .get(`${url}${assets}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    filterData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <h2 className="rating__title">ЗАКАЗАТЬ ОЦЕНКУ</h2>
      <div className="rating__nav">
        <p className="rating__nav__title" onClick={() => filterData()}>
          Все
        </p>
        <p
          className="rating__nav__title"
          onClick={() => filterData("?type_assessments=1")}
        >
          Недвижимое имущество
        </p>
        <p
          className="rating__nav__title"
          onClick={() => filterData("?type_assessments=2")}
        >
          Активы и аренда
        </p>
        <p
          className="rating__nav__title"
          onClick={() => filterData("?type_assessments=3")}
        >
          Движимое имущество
        </p>
      </div>
      <ul className="rating__list">
        {data?.results?.map((el) => {
          return (
            <li className="rating__item" key={el.id}>
              <img src={el.img} alt="" className="rating__item__image" />

              <div className="rating__image__info">
                <h4 className="rating__item__title">{el.product_name}</h4>
                <span className="rating__info__wrapper">
                  <img
                    src={timeIcon}
                    alt=""
                    width="24px"
                    height="24px"
                    style={{ marginRight: "6px" }}
                  />{" "}
                  {el.desc}
                </span>
                <div className="rating__item__bottom">
                  <p className="rating__item__price">{el.price}₽</p>
                  {localStorage.getItem("token") ||
                  localStorage.getItem("login_token") ? (
                    <Link to={"/form1/"}>
                      <button className="rating__item__button">
                        Заказать &gt;
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => navigate("/registration1")}
                      className="rating__item__button"
                    >
                      Заказать &gt;
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MainFaceRating;
