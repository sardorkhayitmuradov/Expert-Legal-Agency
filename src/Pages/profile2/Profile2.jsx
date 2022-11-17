import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Notorious from "../../components/Notorious/Notorious";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import error from "../../assets/images/main/error.svg";
import "./Profile2.css";
import Status from "../../components/Status/Status";
import MyOrder from "../../components/My Order/MyOrder";
import Filter from "../../components/Filter/Filter";
import { useNavigate } from "react-router-dom";

const Profile2 = () => {
  // const navigate = useNavigate();

  return (
    <>
      <ProfileHeader />
      <main className="main">
        <section className="profile-section">
          <div className="profile2-container">
            <div className="profile2-wrapper">
              <Notorious
                label={"У вас нет привязки к Нотариусу"}
                image={error}
                desc={
                  "Найдите своего нотариуса в нашей системе, чтобы автоматически передавать результаты оценок. Повторная отправка не потребуется."
                }
                buttonName={"Поиск Нотариуса"}
              />
              <div className="profile2-wrapper_right">
                <div className="profile2-wrapper_input">
                  <Input
                    labelName={"ФИО нотариуса"}
                    inputType={"text"}
                    inputId={"userFIO"}
                    placeholder={"Иванов Иван Иванович"}
                    descValue={"uft_pole_name"}
                    question={false}
                  />
                </div>
                <div className="profile2-wrapper_input">
                  <Input
                    labelName={"Email"}
                    inputType={"email"}
                    inputId={"userEmail"}
                    placeholder={"example@gmail.com"}
                    descValue={"uft_pole_name"}
                    question={false}
                  />
                </div>
                <div className="profile2-wrapper_input">
                  <Input
                    labelName={"Телефон"}
                    inputType={"tel"}
                    inputId={"userPhone"}
                    placeholder={"+7 (900) 000-00-00"}
                    descValue={"uft_pole_name"}
                    question={false}
                  />
                </div>
                <div className="profile2-wrapper_input">
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
          </div>
        </section>
        <section className="profile-orders">
          <div className="profile3-container">
            <div>
              <h2 className="profile2-title">МОИ ЗАКАЗЫ</h2>
              <MyOrder>
                <Status progress={"В работе"} />
              </MyOrder>
              <br />
              <MyOrder>
                <Status progress={"В работе"} />
              </MyOrder>
              <br />
              <MyOrder>
                <Status progress={"Исполнен"} />
              </MyOrder>
              <br />
              <MyOrder>
                <Status progress={"Исполнен"} />
              </MyOrder>
              <br />
              <MyOrder>
                <Status progress={"Не оплачен"} />
              </MyOrder>
              <br />
              <MyOrder>
                <Status progress={"Не оплачен"} />
              </MyOrder>
            </div>
            <br />
            <div>
              {" "}
              <Filter />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile2;
