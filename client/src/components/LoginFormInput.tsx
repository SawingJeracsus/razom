import React, { useEffect, useRef, useState } from 'react'
import { isPropertySignature } from 'typescript'
import '../style/components/loginInput.css'

interface LoginInputProps  {
    title: string,
    value: string,
    onChange(text: string): void,
    type?: string,
    showPlaceholder?: boolean,
    validateFunc?(text: string): boolean | string | Promise<string | boolean>
}

export const LoginInput: React.FC<LoginInputProps> = ({title, type, showPlaceholder, value, onChange, validateFunc}) => {
        const [valid, setValid] = useState<boolean | string>(true)    

        const changeHandler = async ( text: string ) => {
            setValid(await validateFunc!(text))
            onChange(text)
        }

        return(
            <div className="form-field">
                <div className="form-fieald__title">
                    {valid === true ? title: <p className="error_message">{valid}</p>}
                </div>
                <input value = {value} type={type} onChange={e => changeHandler(e.target.value)} className="form-fieald__input" placeholder={showPlaceholder ? title: ""}/>
            </div>
        )    
}

LoginInput.defaultProps = {
    showPlaceholder: true,
    type: "text",
    validateFunc: (t: string) => true   
}