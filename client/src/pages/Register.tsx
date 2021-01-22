import React from 'react'
import { RegisterForm } from '../components/RegisterForm'
import '../style/login.css'


export const Register: React.FC = () => {
    return(
        <main>
            <div className="bg-ellipse ellipse1"></div>   
            <div className="bg-ellipse ellipse2"></div>   
            <div className="bg-ellipse ellipse3"></div>   
            <div className="bg-ellipse ellipse4"></div>   
            <div className="bg-ellipse ellipse5"></div>
            <div className="formwrapper">
                <RegisterForm />   
            </div>   
        </main>
    )
}