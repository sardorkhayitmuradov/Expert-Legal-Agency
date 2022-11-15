import React from "react";
import "../Filter/Filter.css";
import filter from "../../assets/images/main/filter.svg";
import { Dropdown } from "rsuite";

const Filter = () => {
  return (
    <>
      <div className="profile__filter">
        <div className="filter__label">
          <h1>Фильтры</h1>
          <img src={filter} alt="Filter" />
        </div>
        <div className="filter__dropdown">
          <Dropdown className="filter__drop__btn" title="Тип оценки">
            <br />
            <div className="filter__dropdown_link">
              <input className="filter_inp" type="checkbox" />
              <Dropdown.Item className="filter__dropdown_text1">Для раздела имущества</Dropdown.Item>
            </div>
            <br />
            <div className="filter__dropdown_link">
              <input className="filter_inp" type="checkbox" />
              <Dropdown.Item className="filter__dropdown_text2">Для наследства </Dropdown.Item>
            </div>
            <br />
            <div className="filter__dropdown_link">
              <input className="filter_inp" type="checkbox" />
              <Dropdown.Item className="filter__dropdown_text3">Для продажи имущества</Dropdown.Item>
            </div>
          </Dropdown>
        </div>
        <div className="filter__dropdown">
          <Dropdown className="filter__drop__btn" title="Статус">
            <br />
            <div className="filter__dropdown_link">
              <input className="filter_inp" type="checkbox" />
              <Dropdown.Item className="filter__dropdown_text1">Исполнен</Dropdown.Item>
            </div>
            <br />
            <div className="filter__dropdown_link">
              <input className="filter_inp" type="checkbox" />
              <Dropdown.Item className="filter__dropdown_text2">Новый</Dropdown.Item>
            </div>
            <br />
            <div className="filter__dropdown_link">
              <input className="filter_inp" type="checkbox" />
              <Dropdown.Item className="filter__dropdown_text3">В работе</Dropdown.Item>
            </div>
            <br />
            <div className="filter__dropdown_link">
              <input className="filter_inp" type="checkbox" />
              <Dropdown.Item className="filter__dropdown_text3">Не оплачен</Dropdown.Item>
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Filter;
