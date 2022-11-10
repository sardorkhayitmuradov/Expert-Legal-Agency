import React from 'react';
import "../../Pages/code/Code.css";
import logo from '../../assets/images/main/logo.svg';

const Code = () => {
    return (
        <>
          <div className="code_container">
            <div className="code_card">
                <div className="code_card_img">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="code_card_titles">
                    <h1>Подтверждение</h1>
                    <p>Мы вышлем на <span>+7 (900) 000-00-00</span> бесплатное SMS с кодом</p>
                    <p>Код из SMS</p>
                    <button className='code_card_btn'>Далее</button>
                </div>
            </div>
            </div>  
        </>
    );
}

export default Code;