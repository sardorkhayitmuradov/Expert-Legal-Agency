import React, { useState } from 'react';
import '../../Pages/registration1/Registration1.css';
import logo from '../../assets/images/main/logo.svg';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration1 = () => {
  const navigate = useNavigate();
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');

  window.localStorage.setItem('phone_number' , userPhone);

  const onUserphone = (value) => {
    console.log(value);
    setUserPhone(value);
  };

  const onUserEmail = (value) => {
    console.log(value);
    setUserEmail(value);
  };

  const onUserPassword = (value) => {
    console.log(value);
    setUserPassword(value);
  };

  const onUserConfirmPassword = (value) => {
    console.log(value);
    setUserConfirmPassword(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://maruf.pythonanywhere.com/api/registr/', {
        phone_number: userPhone,
        email: userEmail,
        password: userPassword, 
        confirm_password: userConfirmPassword,
      },{
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((res) => {
        console.log(res.data);
        navigate('/code')
      })
      .catch((err) => {
        console.log(err);
      });
    setUserPhone('');
    setUserEmail('');
    setUserPassword('');
    setUserConfirmPassword('');
  };

  return (
    <>
      <div className='registration1_container'>
        <div className='registration1_card'>
          <div className='reg1_logo_div'>
            <img src={logo} alt='Logo' />
          </div>
          <h1>Регистрация профиля</h1>
          <br />
          <form className='reg1_form' onSubmit={onSubmit}>
            <Input
              labelName={'Номер телефона'}
              inputType={'tel'}
              inputId={'userPhone'}
              placeholder={'+7 (900) 000-00-00'}
              value={userPhone}
              descValue={'uft_pole_name'}
              onGetValue={onUserphone}
              question={false}
            />
            <br />
            <Input
              labelName={'Email (необязательно)'}
              inputType={'email'}
              inputId={'userEmail'}
              placeholder={'example@gmail.com'}
              value={userEmail}
              descValue={'uft_pole_name'}
              onGetValue={onUserEmail}
              question={false}
            />
            <br />
            <Input
              labelName={'Пароль'}
              inputType={'password'}
              inputId={'userPassword'}
              value={userPassword}
              descValue={'uft_pole_name'}
              onGetValue={onUserPassword}
              question={false}
            />
            <br />
            <Input
              labelName={'Повторите пароль'}
              inputType={'password'}
              inputId={'userPasswordReturn'}
              value={userConfirmPassword}
              descValue={'uft_pole_name'}
              onGetValue={onUserConfirmPassword}
              question={false}
            />
            <p className='reg1_form_p2'>
              Нажимая на кнопку “Зарегистрироваться”, вы соглашаетесь на
              <span className='reg1_form_span2'>
                {' '}
                обработку персональных данных.
              </span>
            </p>
            <button className='reg1_form_btn'>
              Сохранить
            </button>
            <Link to='/' className='reg1_form_link'>
              Уже зарегистрированы? Войти
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration1;
