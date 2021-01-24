import React from 'react'
import { isPropertySignature } from 'typescript'
import '../style/components/loginInput.css'

interface LoginInputProps  {
    title: string,
    value: string,
    onChange(text: string): void,
    type?: string,
    showPlaceholder?: boolean
}

export const LoginInput: React.FC<LoginInputProps> = ({title, type, showPlaceholder, value, onChange}) => {
    return(
        <div className="form-field">
            <div className="form-fieald__title">
                {title}
            </div>
            <input value = {value}type={type} onChange={e => onChange(e.target.value)} className="form-fieald__input" placeholder={showPlaceholder ? title: ""}/>
        </div>
    )
}

LoginInput.defaultProps = {
    showPlaceholder: true,
    type: "text"   
}