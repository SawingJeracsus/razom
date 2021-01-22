import React from 'react'
import Logo from '../assetes/logo.png'
import {LoginInput} from './LoginFormInput'
import {LoginCheckbox} from './LoginCheckbox'
import '../style/components/loginForm.css'

import { NavLink } from 'react-router-dom'

export const LoginForm: React.FC = () => {
    
    return (
        <div className = "form">
            <div className="top">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="logotype" className="logo"/>
                    </div>
                </div>
                <h1 className="form-title">Увійдіть у свій аккаунт Razom</h1>
                <LoginInput title="Логін або email" showPlaceholder={false}/> 
                <LoginInput title="Пароль" type="password" showPlaceholder={false}/> 
                <div className="additional_wrapper">
                    <LoginCheckbox title="Запам'ятати мене" />
                    <div className="links">
                        <a href="#">Забули пароль?</a>
                        <NavLink to="/register">Ще не маєте аккаунт Razom?</NavLink>
                    </div>
                </div>
            </div>
            <button className="btn btn-apply">Вперед!</button>
        </div>
    )
}