import React from 'react';
import "../../Pages/email/Email.css";
import logo from '../../assets/images/main/logo.svg';
import {useNavigate} from 'react-router-dom'

const Email = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="email_form_container">
                <div className="email_form_card">
                <div className="email_form_img">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="email_form_label">
                    <h1>Сброс пароля</h1>
                    <p>Введите ваш email для восстановления доступа</p>
                </div>
                <form action="#" className='email_form'>
                    <label htmlFor="#">Email</label>
                    <input className='email_form_input' type="email" placeholder='example@gmail.com' required />
                    <span>uft_pole_name</span>
                    <input type="submit" value={"Далее"} className="email_form_btn" />
                    <span className='email_form_navigate' onClick={() => navigate("/password")}>Сброс пароля по номеру телефона</span>
                </form>
                </div>
            </div>
        </>
    );
}

export default Email;
