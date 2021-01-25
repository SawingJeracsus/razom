import React, {useEffect, useState} from 'react'
import Logo from '../assetes/logo.png'
import {LoginInput} from './LoginFormInput'
import '../style/components/registerForm.css'
import { DateSelector } from './DateSelector'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { CONFIG } from '../CONFIG'

export const RegisterForm: React.FC = () => {
    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    const [ login, setLogin ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordRepit, setPasswordRepit ] = useState('')
    const [ date, setDate ] = useState('')
    
    const [valid, setValid] = useState(false)

    

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        const {data} = await axios.post(`${CONFIG.host}:${CONFIG.port}/user/create`, {
            login,
            email,
            password,
            birthDay: date
        })

        console.log(data);
        
    }

    type ValidatorFunc = ( validationExemplar: string ) => string | boolean | Promise<string | boolean>

    const loginValidator: ValidatorFunc = async (login: string) => {
        if(login.length >= 6){
            const {data} = await axios.get(`${CONFIG.host}:${CONFIG.port}/user/check/login`, {
                params: {login}
            })
            if(data.code === 200){
                return true
            }else{
                return "Користувач з таким логіном уже існує!"
            }
        }else{
            return "Логін повинен бути дожиною 6 або більше символів"
        }
    }
    const emailValidator: ValidatorFunc = async (email: string) => {
        if(validateEmail(email)){
            const {data} = await axios.get(`${CONFIG.host}:${CONFIG.port}/user/check/email`, {
                params: {email}
            })
            if(data.code === 200){
                return true
            }else{
                return "Уже існує аккаунт з даним email!"
            }
        }else{
            return "Введіть коректний email!"
        }
    }
    const passwordValidator: ValidatorFunc = async (password: string) => {
        if(password.length >= 8) {
            return true
        }else{
            return "Довжина пароля повина бути не менщою від 8 символів!"
        }        
    }
    const passwordRepitValidator: ValidatorFunc = async (passwordRepit: string) => {        
        if(passwordRepit == password) {
            return true
        }else{
            return "Паролі не співпадають!"
        }        
    }

    const toValidate = async () => {
        setValid( 
            await loginValidator(login) === true &&  
            await passwordValidator(password) === true &&
            await emailValidator(email) === true &&
            await passwordRepitValidator(passwordRepit) === true && 
            date !== ''     
        )
    }
    useEffect(() => {        
        toValidate()
    }, [login, email, password,passwordRepit, date])

    return (
        <form onSubmit={e => submitHandler(e)} className = "form">
            <div className="top">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="logotype" className="logo"/>
                    </div>
                </div>
                <h1 className="form-title">Створіть свій аккаунт Razom</h1>
                <NavLink className="backlink" to="/login">Уже маєте аккаунт? Просто ввійдіть!</NavLink>
                <LoginInput validateFunc={loginValidator} value = {login} onChange={setLogin} title="Логін" showPlaceholder={false}/> 
                <LoginInput validateFunc={emailValidator} value = {email} onChange={setEmail} title="Email" showPlaceholder={false}/> 
                <LoginInput validateFunc={passwordValidator} value = {password} onChange={setPassword} title="Пароль" type="password" showPlaceholder={false}/> 
                <LoginInput validateFunc={passwordRepitValidator} value = {passwordRepit} onChange={setPasswordRepit} title="Проль ще раз" type="password" showPlaceholder={false}/> 
                <DateSelector onChange={setDate} title="Дата народження"/>
            </div>
            <button  disabled={!valid} className="btn btn-apply">Вперед!</button>
        </form>
    )
}