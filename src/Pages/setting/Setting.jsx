import React from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import Footer from '../../components/Footer/Footer'
import Input from '../../components/Input/Input';
import './Setting.css';

const Setting = () => {
  React.useEffect(() => {
    if (!localStorage.getItem("login_token") || !localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <header className='header'>
        <ProfileHeader />
      </header>
      <main className='main'>
        <section className='setting-profile'>
          <div className='profile-container'>
            <h2 className='profile-setting-title'>НАСТРОЙКИ</h2>
            <div className='profile-wrapper'>
              <div className='profile-setting'>
                <div className='setting-item'>
                  <p className='setting-item-title'>Данные профиля</p>
                </div>
                <div className='setting-item'>
                  <p className='setting-item-title'>Номер телефона</p>
                </div>
                <div className='setting-item'>
                  <p className='setting-item-title'>Сменить пароль</p>
                </div>
              </div>
              <div className='setting-main'>
                <div className='profile'>
                  <h3 className='profile-title'>Данные профиля</h3>
                  <div className='profile-inputs'>
                    <Input
                      labelName={'Фамилия'}
                      inputType={'text'}
                      inputId={'userLastName'}
                      placeholder={'Петров'}
                      descValue={'uft_pole_name'}
                      question={false}
                    />
                    <Input
                      labelName={'Имя'}
                      inputType={'text'}
                      inputId={'userName'}
                      placeholder={'Максим'}
                      descValue={'uft_pole_name'}
                      question={false}
                    />
                    <Input
                      labelName={'Отчество'}
                      inputType={'text'}
                      inputId={'userMiddleName'}
                      placeholder={'Александрович'}
                      descValue={'uft_pole_name'}
                      question={false}
                    />
                    <Input
                      labelName={'Email'}
                      inputType={'email'}
                      inputId={'userEmail'}
                      placeholder={'example@gmail.com'}
                      descValue={'uft_pole_name'}
                      question={true}
                    />
                    <Input
                      labelName={'Место проживания'}
                      inputType={'text'}
                      inputId={'userAddress'}
                      placeholder={'Москва'}
                      descValue={'uft_pole_name'}
                      question={true}
                    />
                  </div>
                </div>
                <div className='tel'>
                  <h3 className='tel-title'>Номер телефона</h3>
                  <p className='tel-desc'>
                    Обратите внимание, для смены номера мобильного телефона
                    потребуется ввести код из SMS, который мы отправим на новый
                    номер.
                  </p>
                  <Input
                    labelName={'Номер телефона'}
                    inputType={'text'}
                    inputId={'userLastName'}
                    placeholder={'+7 (900) 000-00-00'}
                    descValue={'uft_pole_name'}
                    question={false}
                  />
                </div>
                <div className="password">
                  <h3 className="password-title">
                  Смена пароля
                  </h3>
                  <p className="password-desc">
                  Для изменения пароля необходимо ввести текущий пароль к аккаунту. Новый пароль должен быть не короче 6 символов.
                  </p>
                  <div className="password-inputs">
                  <Input
                    labelName={'Номер телефона'}
                    inputType={'text'}
                    inputId={'userLastName'}
                    placeholder={'+7 (900) 000-00-00'}
                    descValue={'uft_pole_name'}
                    question={false}
                  />
                  <Input
                    labelName={'Номер телефона'}
                    inputType={'text'}
                    inputId={'userLastName'}
                    placeholder={'+7 (900) 000-00-00'}
                    descValue={'uft_pole_name'}
                    question={false}
                  />
                  <Input
                    labelName={'Номер телефона'}
                    inputType={'text'}
                    inputId={'userLastName'}
                    placeholder={'+7 (900) 000-00-00'}
                    descValue={'uft_pole_name'}
                    question={false}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Setting;
