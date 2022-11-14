import React from "react";
import "../about/About.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import about from "../../assets/images/main/pic-about-us.png";

const About = () => {
  return (
    <>
      <ProfileHeader />
      <div className="about__container">
        <h1 className="about__label">О КОМПАНИИ</h1>
        <div className="about__company__parent">
          <div className="about__company__left">
            <img src={about} alt="About Company" />
          </div>
          <div className="about__company__right">
            <h2 className="about__company__right__title">Наш сервис</h2>
            <p className="about__company__right__desc">
              ООО “ЭПА” — экспертно-правовое агенство в сфере нотариуальных
              услуг. Мы разработали сервис, закрываюший потребность в оценке
              нотариальных действий. За 3 года успешной работы мы провели более
              8500 оценок имущества. <br /> <br /> Наш быстрый и качественный подход — залог
              успеха компании. Вам не нужно искать оценочную организацию в своем
              городе, готовую оценку вы получите через 1 час после оформления
              заказа.
            </p>
          </div>
        </div>
        <div className="about__statsitics__div">
          <div className="about__statsitics__first">

          </div>
          <div className="about__statsitics__second">

          </div>
          <div className="about__statsitics__third">

          </div>
          <div className="about__statsitics__fourth">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
