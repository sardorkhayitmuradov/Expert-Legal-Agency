import React from 'react';
import RubikIcon from '../../assets/images/main/rubik.svg';
import './Card.css'

const Card = ({ children }) => {
  return (
    <div className='card'>
      <div className='card-info'>
        <h2 className='card-title'>Легковой автомобиль</h2>
        <div className='card-desc-wrapper'>
          <img src={RubikIcon} alt='rubik' className='card-image' />
          <p className='card-desc'>Результат будет доступен для скачивания</p>
        </div>
        <div className='card-desc-wrapper'>
          <img src={RubikIcon} alt='rubik' className='card-image' />
          <p className='card-desc'>На ваш телефон придёт SMS о готовности</p>
        </div>
        <div className='card-desc-wrapper'>
          <img src={RubikIcon} alt='rubik' className='card-image' />
          <p className='card-desc'>Срок оценки — 1 час</p>
        </div>
      </div>
      {children}
      <div className='card-price'>
        <h2 className='card-price-title'>Цена:</h2>
        <span className='card-dollar'>1100₽</span>
      </div>
    </div>
  );
};

export default Card;
