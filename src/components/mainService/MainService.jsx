import React from "react";
import "../mainService/mainService.css";
import clock from "../../assets/images/main/clock.svg";
import gavel from "../../assets/images/main/gavel.svg";
import pen from "../../assets/images/main/signature.svg";
import quote from "../../assets/images/main/quote.svg";

const MainService = () => {
  return (
    <>
      <div className="main_service_container">
        <div className="main_service">
          <h1>ПРЕИМУЩЕСТВА СЕРВИСА</h1>
          <div className="main_slider_parent">
            <div className="main_slider_card1">
              <div className="main_slider_texts">
                <h3>Экономия вашего времени</h3>
                <p>
                  Сделаем готовую оценку <br /> в течение 1 часа
                </p>
              </div>
              <div className="main_slider_img">
                <img src={clock} alt="Clock icon" />
              </div>
            </div>
            <div className="main_slider_card2">
              <div className="main_slider_texts">
                <h3>Отчёт с подписью</h3>
                <p>
                  Квалифицированная электронная <br /> подпись в формате Sig
                </p>
              </div>
              <div className="main_slider_img">
                <img src={pen} alt="Signature-pen icon" />
              </div>
            </div>
            <div className="main_slider_card3">
              <div className="main_slider_texts">
                <h3>Законные основания</h3>
                <p>
                  Работа сервиса в соответствие <br /> с ФЗ и НПА
                </p>
              </div>
              <div className="main_slider_img">
                <img src={gavel} alt="Gavel icon" />
              </div>
            </div>
          </div>
          <h1>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
          <div className="main_testimonials">
            <div className="main_testimonials_card1">
              <div className="main_testimonials_card_top">
                <img src={quote} alt="Quote icon" />
                <div className="card_top_text">
                  <h5>Алексей К.</h5>
                  <p>г. Москва </p>
                </div>
              </div>
              <div className="main_testimonials_body">
                <p>
                  Заказал оценку, через час на телефон <br /> пришла ссылка с подробным <br />
                  разъяснением. Мало кто делает так <br /> оперативно и качественно.
                </p>
              </div>
            </div>
            <div className="main_testimonials_card2">
              <div className="main_testimonials_card_top">
                <img src={quote} alt="Quote icon" />
                <div className="card_top_text">
                  <h5>Валерия Ф.</h5>
                  <p>г. Санкт-Петербург</p>
                </div>
              </div>
              <div className="main_testimonials_body">
                <p>
                  10.08.2022 обратилась за срочной <br /> оценкой по нотариальным
                  действиям, <br /> результат получила в кратчайший срок. <br /> Обращаться
                  сюда искренне рекомендую <br /> всем, работа делается на отлично!.
                </p>
              </div>
            </div>
            <div className="main_testimonials_card3">
              <div className="main_testimonials_card_top">
                <img src={quote} alt="Quote icon" />
                <div className="card_top_text">
                  <h5>Михаил М.</h5>
                  <p>г. Рязань</p>
                </div>
              </div>
              <div className="main_testimonials_body">
                <p>
                  Спасибо большое за оказанную <br /> консультацию и оценку. Нотариус <br />
                  получил оценку автоматически.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainService;
