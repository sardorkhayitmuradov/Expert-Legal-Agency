import React from "react";
import "../Filter/Filter.css";
import filter from "../../assets/images/main/filter.svg";

const Filter = () => {
  return (
    <>
      <div className="profile__filter">
        <div className="filter__label">
          <h2>Фильтры</h2>
          <img src={filter} alt="Filter" />
        </div>
        <div className="profile__filter__dropdown">
          <button>
            Тип оценки{" "}
            <span className="dropdown__btn__span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-compact-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                />
              </svg>
            </span>
          </button>
          <div className="profile__filter__dropdown__content">
            <a className="dropdown__content__links" href="#">
              <span>Настройки</span>
            </a>
            <a href="#" className="dropdown__content__links">
              <span>Помощь</span>
            </a>
            <a href="#" className="dropdown__content__links">
              <span>Выйти</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
