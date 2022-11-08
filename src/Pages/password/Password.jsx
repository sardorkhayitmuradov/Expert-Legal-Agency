import React from 'react';
import "../../Pages/password/Password.css";
import logo from '../../assets/images/main/logo.svg';
import { useNavigate } from 'react-router-dom';

const Password = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="password_form_container">
                <div className="password_form_card">
                        <div className="password_form_logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className='password_form_label'>
                        <h1>Сброс пароля</h1>
                        <p>Введите ваш номер телефона для восстановления доступа</p>
                        </div>
                        <form className='password_form' action="#">
                            <label htmlFor="#">Номер телефона</label>
                            <input className='password_form_input_tel' type="tel" placeholder='+7 (900) 000-00-00' required />
                            <span>uft_pole_name</span>
                            <input className='password_form_btn' type="submit" value={"Далее"} />
                            <span onClick={() => navigate('/email')} className='password_form_navigate_link'>Сброс пароля по email</span>
                        </form>
                </div>
            </div>
        </>
    );
}

export default Password;
