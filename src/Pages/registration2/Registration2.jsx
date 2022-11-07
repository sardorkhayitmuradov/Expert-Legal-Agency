import React from 'react';
import "../../Pages/registration2/Registration2.css";
import logo from '../../assets/images/main/logo.svg';
import hint from '../../assets/images/main/hint.svg';

const Registration2 = () => {
    return (
        <>
            <div className="registration2_container">
                <div className="registration2_card">
                    <div className="reg2_logo_div">
                    <img src={logo} alt="Logo-image" />
                    </div>
                    <h1>Заполнение профиля</h1>
                    <p className='reg2_p'>Заполните следующие поля, чтобы <br /> завершить регистрацию</p>
                    <form className="reg2_form" action="#">
                        <label htmlFor="#">
                        Фамилия
                        </label>
                        <input type="text" placeholder='Иванов' />
                        <p>uft_pole_name</p>
                        <label htmlFor="#">
                        Имя
                        </label>
                        <input type="text" placeholder='Иван' />
                        <p>uft_pole_name</p>
                        <label htmlFor="#">
                        Отчество
                        </label>
                        <input type="text" placeholder='Иванович' />
                        <p>uft_pole_name</p>
                        <label className='reg2_form_hint' htmlFor="#">
                        Место проживания
                        <img src={hint} alt="Hint-icon" />
                        </label>
                        <input type="text" placeholder='Москва, Липецкая область' />
                        <p>uft_pole_name</p>
                        <input className='reg2_form_btn' type="submit" value="Сохранить" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Registration2;
