import React, { useState } from 'react';
import '../../Pages/registration2/Registration2.css';
import logo from '../../assets/images/main/logo.svg';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration2 = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token');

  const [userLastName, setUserLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userMiddleName, setUserMiddleName] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const onUserLastName = (value) => {
    setUserLastName(value);
  };

  const onUserName = (value) => {
    setUserName(value);
  };

  const onUserMiddleName = (value) => {
    setUserMiddleName(value);
  };

  const onUserAddress = (value) => {
    setUserAddress(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        'https://maruf.pythonanywhere.com/api/prof/',
        {
          last_name: userLastName,
          first_name: userName,
          patronymic: userMiddleName,
          place_residence: userAddress,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // navigate('/profile2')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='registration2_container'>
        <div className='registration2_card'>
          <div className='reg2_logo_div'>
            <img src={logo} alt='Logo' />
          </div>
          <h1>Заполнение профиля</h1>
          <p className='reg2_p'>
            Заполните следующие поля, чтобы завершить регистрацию
          </p>
          <br />
          <form className='reg2_form' onSubmit={onSubmit}>
            <Input
              labelName={'Фамилия'}
              inputType={'text'}
              inputId={'userSurname'}
              placeholder={'Иванов'}
              descValue={'uft_pole_name'}
              value={userLastName}
              onGetValue={onUserLastName}
              question={false}
            />
            <br />
            <Input
              labelName={'Имя'}
              inputType={'text'}
              inputId={'userName'}
              placeholder={'Иван'}
              descValue={'uft_pole_name'}
              value={userName}
              onGetValue={onUserName}
              question={false}
            />
            <br />
            <Input
              labelName={'Отчество'}
              inputType={'text'}
              inputId={'userSecondName'}
              placeholder={'Иванович'}
              descValue={'uft_pole_name'}
              onGetValue={onUserMiddleName}
              value={userMiddleName}
              question={false}
            />
            <br />
            <Input
              labelName={'Место проживания'}
              inputType={'text'}
              inputId={'userAddress'}
              placeholder={'Москва, Липецкая область'}
              onGetValue={onUserAddress}
              value={userAddress}
              descValue={'uft_pole_name'}
              question={true}
            />
            <button className='reg2_form_btn'>Сохранить</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration2;
