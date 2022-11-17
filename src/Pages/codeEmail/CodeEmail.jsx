import React from 'react';
import "../../Pages/codeEmail/CodeEmail.css";
import logo from '../../assets/images/main/logo.svg';
import CodeInput from '../../components/CodeInput/CodeInput';
import { useNavigate } from 'react-router-dom';

const CodeEmail = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="code_mail_container">
            <div className="code_mail_card">
                <div className="code_mail_img">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="code_mail_titles">
                    <h1>Подтверждение</h1>
                    <p>Мы вышлем на <span>example@gmail.com</span> письмо с кодом</p>
                    <p>Код из письма</p>
                    <CodeInput/>
                    <button className='code_mail_btn' onClick={() => navigate("/newpassword")}>Далее</button>
                </div>
            </div>
        </div>   
        </>
    );
}

export default CodeEmail;