import React from 'react';
import statusTimeIcon from '../../assets/images/main/statusTime.svg'
import receipt from '../../assets/images/main/receipt.svg'
import './Status.css';


const Status = ({ progress }) => {
  if (progress === 'В работе') {
    return (
      <div className='status'>
        <div className='status-top'>
          <h3 className='status-title'>Статус : </h3>
          <p className='status-progress'>В работе</p>
        </div>
        <div className='status-info'>
          <div className='status-desc-wrapper'>
            <img src={statusTimeIcon} alt='' className='desc-wrappper-img' />
            <p className='wrappe-desc'>
              Здесь скоро появятся результаты оценки
            </p>
          </div>
        </div>
      </div>
    );
  } else if (progress === 'Исполнен') {
    return (
      <div className='status'>
        <div className='status-top'>
          <h3 className='status-title'>Статус :</h3>
          <span className='status-progress verified'>Исполнен</span>
        </div>
        <div className='status-info'>
          <div className='desc-wrapper'>
            <img src={receipt} alt='' className='desc-wrappper-img' />
            <p className='wrapper-desc'>
            Электронный отчёт
            </p>
          </div>
          <div className='desc-wrapper'>
            <img src={receipt} alt='' className='desc-wrappper-img' />
            <p className='wrapper-desc'>
            Электронный отчёт
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='status'>
        <div className='status-top notpayedTop'>
          <h3 className='status-title'>Статус :</h3>
          <span className='status-progress notPayed'>Не оплачен</span>
        </div>
        <button className='status-button'>Оплатить</button>
      </div> 
    );
  }
};

export default Status;
