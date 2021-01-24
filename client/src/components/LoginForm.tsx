import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../assetes/logo.png'
import {LoginInput} from './LoginFormInput'
import {LoginCheckbox} from './LoginCheckbox'
import { CONFIG } from '../CONFIG'
import '../style/components/loginForm.css'

import { NavLink } from 'react-router-dom'


export const LoginForm: React.FC = () => {
    
    const [ login, setLogin ] = useState('')
    const [ password, setPassword ] = useState('')


    return (
        <form className = "form" onSubmit = {async e => {
            e.preventDefault()
            
            // const responce =  await axios.get(CONFIG.host+":"+CONFIG.port+"/user/login?login=")
            const responce  = await axios.get(`${CONFIG.host}:${CONFIG.port}/user/login`, {
                params: {
                    login, password
                }
            })
            
        }}>
            <div className="top">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="logotype" className="logo"/>
                    </div>
                </div>
                <h1 className="form-title">Увійдіть у свій аккаунт Razom</h1>
                <LoginInput value={login} onChange={setLogin} title="Логін або email" showPlaceholder={false}/> 
                <LoginInput value={password} onChange={setPassword} title="Пароль" type="password" showPlaceholder={false}/> 
                <div className="additional_wrapper">
                    <LoginCheckbox title="Запам'ятати мене" />
                    <div className="links">
                        <a href="#">Забули пароль?</a>
                        <NavLink to="/register">Ще не маєте аккаунт Razom?</NavLink>
                    </div>
                </div>
            </div>
            <button className="btn btn-apply">Вперед!</button>
        </form>
    )
}