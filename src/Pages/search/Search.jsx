import React from "react";
import "../../Pages/search/Search.css";
import MainHeader from "../../components/mainHeader/MainHeader";
import error from "../../assets/images/main/error.svg";
import Input from "../../components/Input/Input";

const Search = () => {
  return (
    <>
      <MainHeader />
      <div className="search_container">
        <div className="search_card_1">
          <div className="search_card_1_left">
            <div className="search_card_1_img">
              <img src={error} alt="Error" />
              <h3>У вас нет привязки к Нотариусу</h3>
            </div>
            <div className="search_card_1_left_desc">
              <p>
                Найдите своего нотариуса в нашей системе, чтобы автоматически
                передавать результаты оценок. Повторная отправка не потребуется.
              </p>
            </div>
            <div className="search_card_1_left_btn">
              <button>Поиск Нотариуса</button>
            </div>
          </div>
          <div className="search_card_1_right">
            <div className="search_card_1_input">
              <Input
                labelName={"ФИО нотариуса"}
                inputType={"text"}
                inputId={"userFIO"}
                placeholder={"Иванов Иван Иванович"}
                descValue={"uft_pole_name"}
                question={false}
              />
            </div>
            <div className="search_card_1_input">
              <Input
                labelName={"Email"}
                inputType={"email"}
                inputId={"userEmail"}
                placeholder={"example@gmail.com"}
                descValue={"uft_pole_name"}
                question={false}
              />
            </div>
            <div className="search_card_1_input">
              <Input
                labelName={"Телефон"}
                inputType={"tel"}
                inputId={"userPhone"}
                placeholder={"+7 (900) 000-00-00"}
                descValue={"uft_pole_name"}
                question={false}
              />
            </div>
            <div className="search_card_1_input">
              <Input
                labelName={"Адрес"}
                inputType={"text"}
                inputId={"userAddress"}
                placeholder={"Москва"}
                descValue={"uft_pole_name"}
                question={false}
              />
            </div>
          </div>
        </div>
        <div className="search_card_2">
          <div className="search_card_2_label">
            <h1>Результаты поиска</h1>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Search;
