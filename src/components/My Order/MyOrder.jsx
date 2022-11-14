import React from 'react'
import './MyOrder.css'

const MyOrder = ({date , title , desc , children}) => {
  return (
    <div className='myorder'>
        <h4 className="myorder-date">12.02.2022</h4>

        <div className="myorder-info">

            <div className="myorder-info-wrapper">
                <h2 className="wrapper-title">
                Нежилая и коммерческая недвижимость  №1920
                </h2>
                <p className="myorder-wrapper-desc">
                Для раздела имущества
                </p>
                <div className="wrapper-links">
                    <p className="links-title">Редактировать заказ</p>
                    <p className="links-title">Чек оплаты</p>
                    <p className="links-title">Подробнее</p>
                </div>
            </div>

            {children}
        </div>
    </div>
  )
}

export default MyOrder