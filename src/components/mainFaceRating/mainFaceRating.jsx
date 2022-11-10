import React from 'react';
import flatIcon from '../../assets/images/main/flat.svg';
import landPilotIcon from '../../assets/images/main/land plot.svg';
import houseIcon from '../../assets/images/main/house.svg';
import garageIcon from '../../assets/images/main/garage.svg';
import houseWithPilot from '../../assets/images/main/house-with-land-plot.svg';
import wareHouseIcon from '../../assets/images/main/warehouse.svg';
import timeIcon from '../../assets/images/main/time.svg';

import './mainFaceRating.css';

const MainFaceRating = () => {
  return (
    <>
      <h2 className='rating__title'>ПОПУЛЯРНЫЕ ОЦЕНКИ</h2>
      <div className='rating__nav'>
        <p className="rating__nav__title">Недвижимое имущество</p>
        <p className="rating__nav__title">Активы и аренда</p>
        <p className="rating__nav__title">Движимое имущество</p>
      </div>
      <ul className='rating__list'>
        <li className='rating__item'>
          <img src={flatIcon} alt='' className='rating__item__image' />

          <div className='rating__image__info'>
            <h4 className='rating__item__title'>Легковой автомобиль</h4>
            <span className='rating__info__wrapper'>
              <img src={timeIcon} alt='' width='24px' height='24px' style={{marginRight: "6px"}} /> Срок
              изготовления — 1 час
            </span>
            <div className='rating__item__bottom'>
              <p className='rating__item__price'>1100₽</p>
              <button className='rating__item__button'>Заказать  &gt;</button>
            </div>
          </div>
        </li>
        <li className='rating__item'>
          <img src={garageIcon} alt='' className='rating__item__image' />
          <div className='rating__image__info'>
            <h4 className='rating__item__title'>Акции</h4>

            <span className='rating__info__wrapper'>
              <img src={timeIcon} alt='' width='24px' height='24px'  style={{marginRight: "6px"}} /> Срок
              изготовления — 1 час
            </span>
            <div className='rating__item__bottom'>
              <p className='rating__item__price'>1100₽</p>
              <button className='rating__item__button'>Заказать  &gt;</button>
            </div>
          </div>
        </li>
        <li className='rating__item'>
          <img src={landPilotIcon} alt='' className='rating__item__image' />
          <div className='rating__image__info'>
            <h4 className='rating__item__title'>Земельный участок</h4>
            <span className='rating__info__wrapper'>
              <img src={timeIcon} alt='' width='24px' height='24px'  style={{marginRight: "6px"}} /> Срок
              изготовления — 1 час
            </span>
            <div className='rating__item__bottom'>
              <p className='rating__item__price'>1100₽</p>
              <button className='rating__item__button'>Заказать  &gt;</button>
            </div>
          </div>
        </li>
        <li className='rating__item'>
          <img src={houseWithPilot} alt='' className='rating__item__image' />
          <div className='rating__image__info'>
            <h4 className='rating__item__title'>Оружие</h4>
            <span className='rating__info__wrapper'>
              <img src={timeIcon} alt='' width='24px' height='24px'  style={{marginRight: "6px"}} /> Срок
              изготовления — 1 час
            </span>
            <div className='rating__item__bottom'>
              <p className='rating__item__price'>1100₽</p>
              <button className='rating__item__button'>Заказать  &gt;</button>
            </div>
          </div>
        </li>
        <li className='rating__item'>
          <img src={houseIcon} alt='' className='rating__item__image' />

          <div className='rating__image__info'>
            <h4 className='rating__item__title'>Легковой автомобиль</h4>
            <span className='rating__info__wrapper'>
              <img src={timeIcon} alt='' width='24px' height='24px' style={{marginRight: "6px"}} /> Срок
              изготовления — 1 час
            </span>
            <div className='rating__item__bottom'>
              <p className='rating__item__price'>1100₽</p>
              <button className='rating__item__button'>Заказать  &gt;</button>
            </div>
          </div>
        </li>
        <li className='rating__item'>
          <img src={wareHouseIcon} alt='' className='rating__item__image' />

          <div className='rating__image__info'>
            <h4 className='rating__item__title'>Легковой автомобиль</h4>
            <span className='rating__info__wrapper'>
              <img src={timeIcon} alt='' width='24px' height='24px' style={{marginRight: "6px"}} /> Срок
              изготовления — 1 час
            </span>
            <div className='rating__item__bottom'>
              <p className='rating__item__price'>1100₽</p>
              <button className='rating__item__button'>Заказать  &gt;</button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MainFaceRating;

