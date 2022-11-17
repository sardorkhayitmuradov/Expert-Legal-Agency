import React from 'react';
import serviceIcon from '../../assets/images/main/service.svg'
import creditCard from '../../assets/images//main/credit card.svg'
import passcodeIcon from '../../assets/images/main/passcode.svg'
import succesIcon from '../../assets/images/main/success.svg'
import './mainOrder.css'

const MainOrder = () => {
    return (
        <>
            <h2 className="order__title">
                КАК ЗАКАЗАТЬ ЭЛЕКТРОННУЮ ОЦЕНКУ?
            </h2>
            <ul className="order__list">
                <li className="order__items">
                    <img src={serviceIcon} alt="" className='order__items__image' />
                    <h3 className="order__items__title">
                    1. Выберите услугу
                    </h3>
                    <p className="order__items__p">
                        Для заказа электронной оценки выберите услугу и начните её оформление. Время заказа составляет 2-5 минут. 
                    </p>
                </li>
                <li className="order__items">
                    <img src={creditCard} alt="" className='order__items__image' />
                    <h3 className="order__items__title">
                    2. Оплатите заказ
                    </h3>
                    <p className="order__items__p">
                        Для заказа электронной оценки выберите услугу и начните её оформление. Время заказа составляет 2-5 минут. 
                    </p>
                </li>
                <li className="order__items">
                    <img src={passcodeIcon} alt="" className='order__items__image' />
                    <h3 className="order__items__title">
                        3. Войдите на сайт
                    </h3>
                    <p className="order__items__p">
                        Для заказа электронной оценки выберите услугу и начните её оформление. Время заказа составляет 2-5 минут. 
                    </p>
                </li>
                <li className="order__items">
                    <img src={succesIcon} alt="" className='order__items__image' />
                    <h3 className="order__items__title">
                    4. Получите оценку
                    </h3>
                    <p className="order__items__p">
                        Для заказа электронной оценки выберите услугу и начните её оформление. Время заказа составляет 2-5 минут. 
                    </p>
                </li>
            </ul>
        </>
    );
}

export default MainOrder;
