import React from 'react';
import Card from '../../components/Card/Card';
import MainHeader from '../../components/mainHeader/MainHeader';
import progressIcon from '../../assets/images/main/progress.svg';
import Input from '../../components/Input/Input'
import './Form1.css';

const Form1 = () => {
  return (
    <>
      <MainHeader />
      <main className='main'>
        <section className='form1'>
          <div className='container form1-container'>
            <Card />
            <div className='process'>
              <div className='procces-header'>
                <img
                  src={progressIcon}
                  alt=''
                  className='process-header-image'
                />
                <div className='process-header-infos'>
                  <h2 className='header-title'>Шаг 1 из 4. Общая информация</h2>
                  <p className='header-desc'>
                    Заполните общую информацию для получения электронной оценки.
                  </p>
                </div>
              </div>
              <div className='process-rating'>
                <h3 className='rating-title'>Выберите направление оценки</h3>
                <div className='rating-radios'>
                  <div className='radio-wrapper'>
                    <input
                      type='radio'
                      id='inheritance'
                      name='radios'
                      value='Для получения наследства'
                      checked
                    />
                    <label htmlFor='inheritance' className='radio-label'>
                      Для получения наследства
                    </label>
                  </div>
                  <div className='radio-wrapper'>
                    <input
                      type='radio'
                      id='devide'
                      name='radios'
                      value='Для раздела имущества'
                   
                    />
                    <label htmlFor='devide' className='radio-label'>
                    Для раздела имущества
                    </label>
                  </div>
                  <div className='radio-wrapper'>
                    <input
                      type='radio'
                      id='money'
                      name='radios'
                      value='Для получения наследства'
                    
                    />
                    <label htmlFor='money' className='radio-label'>
                      Для получения наследства
                    </label>
                  </div>
                  
                </div>
              </div>
              <div className='process-info'>
                <div className="customer-info">
                    <h3 className="customer-info">Информация о заказчике</h3>
                    <div className="coustomer-inputs">
                        <div className="inputs-top">
                            <Input labelName={'Фамилия'} inputType={'text'} inputId={'userLastName'} placeholder={'Петров'} descValue={'uft_pole_name'} question={false} />
                            <Input labelName={'Фамилия'} inputType={'text'} inputId={'userLastName'} placeholder={'Петров'} descValue={'uft_pole_name'} question={false} />
                            <Input labelName={'Фамилия'} inputType={'text'} inputId={'userLastName'} placeholder={'Петров'} descValue={'uft_pole_name'} question={false} />
                        </div>
                        <div className="inputs-top">
                            <Input labelName={'Фамилия'} inputType={'text'} inputId={'userLastName'} placeholder={'Петров'} descValue={'uft_pole_name'} question={false} />
                            <Input labelName={'Фамилия'} inputType={'text'} inputId={'userLastName'} placeholder={'Петров'} descValue={'uft_pole_name'} question={false} />
                            <Input labelName={'Фамилия'} inputType={'text'} inputId={'userLastName'} placeholder={'Петров'} descValue={'uft_pole_name'} question={false} />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Form1;
