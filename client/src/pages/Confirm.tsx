import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { CONFIG } from '../CONFIG'
import "../style/login.css"

export const ConfirmPage: React.FC = () => {
    
    const [valid, setValid] = useState(true)

    const styles = {
        congratulation: {
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 12 
        }
    }

    const { token } = useParams<{[key: string]: string}>()        

    useEffect(() => {
        confirmFunc()
    }, [])

    const confirmFunc = async () => {
        const responce = await axios.get(`${CONFIG.host}:${CONFIG.port}/user/confirm/${token}`)
        console.log(responce);
        
        setValid(200 == responce.data.code)
    }

    if(token !== 'email'){return (
        <main>
            <div className="bg-ellipse ellipse1"></div>   
            <div className="bg-ellipse ellipse2"></div>   
            <div className="bg-ellipse ellipse3"></div>   
            <div className="bg-ellipse ellipse4"></div>   
            <div className="bg-ellipse ellipse5"></div>
            <div className="formwrapper">
                <div style={styles.congratulation}>
                    <h1 style={valid ? {} : {color: "tomato"}}>{valid ? "Email успішно підтверджено": "Помилка"}</h1>
                    <p>{valid ? "Можете розпочинати користуватися Razom" : "Не Вдалось активувати користувача"}</p>
                    <NavLink to="/main">На головну</NavLink>
                </div>
            </div>
        </main>
    )}else{
        return (
            <main>
            <div className="bg-ellipse ellipse1"></div>   
            <div className="bg-ellipse ellipse2"></div>   
            <div className="bg-ellipse ellipse3"></div>   
            <div className="bg-ellipse ellipse4"></div>   
            <div className="bg-ellipse ellipse5"></div>
            <div className="formwrapper">
                <p style={styles.congratulation}>
                    <h1>Підтвердіть свій Email</h1>
                    <p>Відкрийте ,отриманий від Razom, лист і натисніть на кнопку підтвердження!</p>
                </p>
            </div>
        </main>
        )
    }
}