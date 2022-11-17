import React from 'react'
import Input from '../Input/Input'
import './SettingProfile.css'

const SettingProfile = () => {
  return (
    <div className='profile'>
        <h3 className="profile-title">
        Данные профиля
        </h3>
        <div className="profile-inputs">
            <Input labelName={'Фамилия'} inputType={'text'} inputId={'userLastName'} placeholder={'Петров'} descValue={'uft_pole_name'} question={false}  />
        </div>
    </div>
  )
}

export default SettingProfile