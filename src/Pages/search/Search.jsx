import React from "react";
import "../../Pages/search/Search.css";
import Footer from "../../components/Footer/Footer";
import error from "../../assets/images/main/error.svg";
import Input from "../../components/Input/Input";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Notorious from "../../components/Notorious/Notorious";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProfileHeader />
      <div className="search_container">
        <div className="search_card_1">
          <Notorious
            label={"У вас нет привязки к Нотариусу"}
            image={error}
            desc={
              "Найдите своего нотариуса в нашей системе, чтобы автоматически передавать результаты оценок. Повторная отправка не потребуется."
            }
            buttonName={"Поиск Нотариуса"}
          />
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
          <table className="search_table">
            <thead>
              <tr className="search_table_head_tr">
                <th className="search_table_name">ФИО нотариуса</th>
                <th className="search_table_number">Номер телефона</th>
                <th className="search_table_email">Email</th>
                <th className="search_table_address">Адрес</th>
                <th className="search_table_empty">empty</th>
              </tr>
            </thead>
            <tbody>
              <tr className="search_table_body_tr">
                <td className="search_table_name">
                  Капустин Трофим Серапионович
                </td>
                <td className="search_table_number">+7 (900) 000-00-00</td>
                <td className="search_table_email">
                  haheutelauyau-1851@yopmail.com
                </td>
                <td className="search_table_address">
                  Ленинградская область, город Зарайск, пр. Гоголя, 10
                </td>
                <td>
                  <button
                    className="search_table_btn"
                    onClick={() => navigate("/services")}
                  >
                    Подключить
                  </button>
                </td>
              </tr>
              <tr className="search_table_body_tr">
                <td className="search_table_name">Аксенов Иван Владимирович</td>
                <td className="search_table_number">+7 (900) 000-00-00</td>
                <td className="search_table_email">
                  preuffefreuddewou-4251@yopmail.com
                </td>
                <td className="search_table_address">
                  Кировская область, город Люберцы, пл. Славы, 74
                </td>
                <td>
                  <button
                    className="search_table_btn"
                    onClick={() => navigate("/services")}
                  >
                    Подключить
                  </button>
                </td>
              </tr>
              <tr className="search_table_body_tr">
                <td className="search_table_name">Савин Ярослав Эдуардович</td>
                <td className="search_table_number">+7 (900) 000-00-00</td>
                <td className="search_table_email">
                  micrulakobra-3611@yopmail.com
                </td>
                <td className="search_table_address">
                  Белгородская область, город Можайск, наб. Будапештсткая, 23
                </td>
                <td>
                  <button
                    className="search_table_btn"
                    onClick={() => navigate("/services")}
                  >
                    Подключить
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
