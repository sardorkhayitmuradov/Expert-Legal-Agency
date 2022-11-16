import React from "react";
import "../about/About.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import about from "../../assets/images/main/pic-about-us.png";
import judge from "../../assets/images/main/pic-judge.png";
import phone from "../../assets/images/main/phone.svg";
import email from "../../assets/images/main/email.svg";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate =useNavigate()
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
              8500 оценок имущества. <br /> <br /> Наш быстрый и качественный
              подход — залог успеха компании. Вам не нужно искать оценочную
              организацию в своем городе, готовую оценку вы получите через 1 час
              после оформления заказа.
            </p>
          </div>
        </div>
        <div className="about__statsitics__div">
          <div className="about__statsitics__first">
            <h1 className="about__statsitics__h1">8500+</h1>
            <p className="about__statsitics__p">сделанных оценок имущества</p>
          </div>
          <div className="about__statsitics__second">
            <h1 className="about__statsitics__h1">6374</h1>
            <p className="about__statsitics__p">
              нотариуса в РФ работают с нами
            </p>
          </div>
          <div className="about__statsitics__third">
            <h1 className="about__statsitics__h1">23</h1>
            <p className="about__statsitics__p">
              вида оценок для нотариальных услуг
            </p>
          </div>
          <div className="about__statsitics__fourth">
            <h1 className="about__statsitics__h1">3+</h1>
            <p className="about__statsitics__p">года успешной работы сервиса</p>
          </div>
        </div>
        <div className="about__law__parent">
          <div className="about__law__left">
            <h1 className="about__law__title">Законные основания</h1>
            <p className="about__law__desc">
              Мы соответствуем Федеральным законам и Нормативно-правовым актам,
              которые установлены для оценочных организаций. Все разрешающие
              документы и лицензии для производства оценок прикладываем к
              каждому сделанному отчету. <br /> <br /> Если у вас остались
              вопросы, вы можете сязаться с нами для бесплатной консультации по
              номеру +7 (800) 600-85-89.
            </p>
            <div className="about__law__btns">
              <button className="about__law__btn1" onClick={() => navigate("/services")}>Заказать оценку</button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:+7 (800) 600-85-89"
              >
                {" "}
                <button className="about__law__btn2">Обратный звонок</button>
              </a>
            </div>
          </div>
          <div className="about__law__right">
            <img src={judge} alt="Pic-Judge" />
          </div>
        </div>
        <h1 className="about__label">КОНТАКТЫ</h1>
        <div className="about__contacts__parent">
          <div className="about__map__address">
            <h3 className="about__map__title">
              Адрес:{" "}
              <span className="about__map__desc">
                195197, г. Санкт-Петербург, ул. Минеральная, д. 13А, помещ. 19н
                офис 416/2
              </span>
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1996.8800885760836!2d30.37039011607175!3d59.96731253188659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMTk1MTk3LCDQsy4g0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINGD0LsuINCc0LjQvdC10YDQsNC70YzQvdCw0Y8sINC0LiAxM9CQLCDQv9C-0LzQtdGJLiAxOdC9INC-0YTQuNGBIDQxNi8y!5e0!3m2!1sru!2s!4v1668405069962!5m2!1sru!2s"
              width="480"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="about__map"
              title="iframe"
            ></iframe>
          </div>
          <div className="about__contact__with__us">
            <div className="about__contact__numbers">
              <h3>Cвязаться с нами:</h3>
              <div className="about__phone__img">
                <img src={phone} alt="Phone" />
                <a target="_blank" href="tel:+7 (800) 600-85-89">
                  +7 (800) 600-85-89
                </a>
              </div>
              <div className="about__email__img">
                <img src={email} alt="Email" />
                <a href="#">epa.kaskad@gmail.com</a>
              </div>
            </div>
            <div className="about__mode">
              <h3>Режим работы:</h3>
              <p>
                Оформление заявок на оценку: <br /> круглосуточно
              </p>
              <p>
                Отправка отчетов: ежедневно <br /> с 09:30 - 18:30 (МСК)
              </p>
            </div>
            <ul className="footer_content_2 about__rekvizits">
              <li>
                <h3 className="f_main">Реквизиты</h3>
              </li>
              <li className="twice_li about__twice__li">
                <p>Банк</p>

                <p>ПАО Сбербанк</p>
              </li>
              <li className="twice_li about__twice__li">
                <p>ИНН</p>

                <p>7804687315</p>
              </li>
              <li className="twice_li about__twice__li">
                <p>БИК.</p>

                <p>044030653</p>
              </li>
              <li className="twice_li about__twice__li">
                <p>Р/СЧ</p>

                <p>40701.810.7.55000001344</p>
              </li>
              <li className="twice_li about__twice__li">
                <p>К/СЧ</p>

                <p>30101.810.5.00000000653</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
