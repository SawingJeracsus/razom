import React from 'react'
import Logo from '../assetes/logo.png'
import {LoginInput} from './LoginFormInput'
import '../style/components/registerForm.css'
import { DateSelector } from './DateSelector'
import { NavLink } from 'react-router-dom'

export const RegisterForm: React.FC = () => {
    
    return (
        <div className = "form">
            <div className="top">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="logotype" className="logo"/>
                    </div>
                </div>
                <h1 className="form-title">Створіть свій аккаунт Razom</h1>
                <NavLink className="backlink" to="/login">Уже маєте аккаунт? Просто ввійдіть!</NavLink>
                <LoginInput title="Логін" showPlaceholder={false}/> 
                <LoginInput title="Email" showPlaceholder={false}/> 
                <LoginInput title="Пароль" type="password" showPlaceholder={false}/> 
                <LoginInput title="Проль ще раз" type="password" showPlaceholder={false}/> 
                <DateSelector title="Дата народження"/>
            </div>
            <button className="btn btn-apply">Вперед!</button>
        </div>
    )
}