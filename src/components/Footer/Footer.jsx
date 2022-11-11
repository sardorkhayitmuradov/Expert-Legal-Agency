import React from "react";
import { Link } from "react-router-dom";
import "../Footer/footer.css";
import flogo from "../../assets/images/main/footerlogo.png";
import visa from "../../assets/images/main/visa.svg";
import mir from "../../assets/images/main/mir.svg";
import masterCard from "../../assets/images/main/mastercard.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_parent">
            <ul className="footer_content_1">
              <Link to="/">
                <li>
                  <img src={flogo} alt="" />
                </li>
                <li>
                  ООО «Экспертно-Правовое <br /> Агентство»
                </li>
              </Link>
            </ul>
            <ul className="footer_content_2">
              <li>
                <Link className="f_main">Реквизиты</Link>
              </li>
              <li className="twice_li">
                <Link>
                  <p className="text_1">Банк</p>
                </Link>
                <Link>
                  <p>ПАО Сбербанк</p>
                </Link>
              </li>
              <li className="twice_li">
                <Link>
                  <p className="text_1">ИНН</p>
                </Link>
                <Link>
                  <p>7804687315</p>
                </Link>
              </li>
              <li className="twice_li">
                <Link>
                  <p className="text_1">Бик</p>
                </Link>
                <Link>
                  <p>044030653</p>
                </Link>
              </li>
              <li className="twice_li">
                <Link>
                  <p className="text_1">Р/СЧ</p>
                </Link>
                <Link>
                  <p>40701.810.7.55000001344</p>
                </Link>
              </li>
              <li className="twice_li">
                <Link>
                  <p className="text_1">К/СЧ</p>
                </Link>
                <Link>
                  <p>30101.810.5.00000000653</p>
                </Link>
              </li>
            </ul>
            <ul className="footer_content_3">
              <li>
                <Link className="f_main">Информация</Link>
              </li>
              <li>
                <Link>Личный кабинет</Link>
              </li>
              <li>
                <Link>Популярные вопросы</Link>
              </li>
              <li>
                <Link>
                  Оформление заявок на оценку: круглосуточно
                </Link>
              </li>
              <li>
                <Link></Link>Отправка отчетов: ежедневно с 09:30 - 18:30
                (МСК)
              </li>
            </ul>
            <ul className="footer_content_4">
              <li>
                <Link className="f_main">+7 (800) 600-85-89</Link>
              </li>
              <p>
                <Link className="f_main">epa.kaskad@gmail.com</Link>
              </p>
              <li>
                <Link className="f_main">Безопасная оплата</Link>
              </li>
              <li className="small_li">
                <Link>
                  Операция осуществляется с использованием шифровального{" "}
                  <br /> соединения SSl
                </Link>
              </li>
              <li className="li_imgs">
                <Link>
                  <img src={visa} alt="Visa-card" />
                </Link>
                <Link>
                  <img src={masterCard} alt="Master-card" />
                </Link>
                <Link>
                  <img src={mir} alt="Mir-card" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_last_content">
            <div className="footer_last_1">
              <Link>Политика конфиденциальности  <br /> ©2022 Все права защищены</Link>
            </div>
            <div className="footer_last_2">
              <Link>195197, г. Санкт-Петербург, ул. Минеральная, <br /> д. 13 А, помещ. 19н офис 416/2</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

