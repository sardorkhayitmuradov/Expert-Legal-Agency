import React from 'react';
import iconThomb from '../../assets/images/main/rhomb.svg'
import './mainHero.css'

const MainHero = () => {
    return (
        <>
            <div className='hero-left'>
            <h2 className="hero-left__title">СЕРВИС ЭЛЕКТРОННОЙ ОЦЕНКИ ДЛЯ НОТАРИАЛЬНЫХ УСЛУГ</h2>
            <div className="hero-left__process">
                <div className="hero--left__items">
                    <img src={iconThomb} alt="" className='hero-left__items__iamge' />
                    <p className="hero-left__items__desc">
                    для получения наследства
                    </p>
                </div>
                <div className="hero--left__items">
                    <img src={iconThomb} alt="" className='hero-left__items__iamge' />
                    <p className="hero-left__items__desc">
                    для получения наследства
                    </p>
                </div>
                <div className="hero--left__items">
                    <img src={iconThomb} alt="" className='hero-left__items__iamge' />
                    <p className="hero-left__items__desc">
                    для получения наследства
                    </p>
                </div>
            </div>
            <p className="hero-left__p">
            Оформление и выдача электронного отчета об оценке полностью онлайн по минимальной цене и самым удобным способом в России. Местонахождение наследников и нотариуса не имеет значения.
            </p>
            <div className="btns">
                <button className='btns__btn'>Заказать оценку</button>
                <button className='btns__second'>Обратный звонок</button>
            </div>
        </div>
        <div className="hero-right">
            <div className="hero-right__items">
                <span className="hero-right__numbers">8500+</span>
                <p className="hero-right__numbers__desc">
                сделанных оценок имущества
                </p>
            </div>
            <div className="hero-right__items">
                <span className="hero-right__numbers">8500+</span>
                <p className="hero-right__numbers__desc">
                сделанных оценок имущества
                </p>
            </div>
            <div className="hero-right__items">
                <span className="hero-right__numbers">8500+</span>
                <p className="hero-right__numbers__desc">
                сделанных оценок имущества
                </p>
            </div>
            <div className="hero-right__items">
                <span className="hero-right__numbers">8500+</span>
                <p className="hero-right__numbers__desc">
                сделанных оценок имущества
                </p>
            </div>
        </div>
        </>
    );
}

export default MainHero;
