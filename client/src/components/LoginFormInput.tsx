import React from 'react'
import { isPropertySignature } from 'typescript'
import '../style/components/loginInput.css'

interface LoginInputProps  {
    title: string,
    type?: string,
    showPlaceholder?: boolean
}

export const LoginInput: React.FC<LoginInputProps> = ({title, type, showPlaceholder}) => {
    return(
        <div className="form-field">
            <div className="form-fieald__title">
                {title}
            </div>
            <input type={type} className="form-fieald__input" placeholder={showPlaceholder ? title: ""}/>
        </div>
    )
}

LoginInput.defaultProps = {
    showPlaceholder: true,
    type: "text"   
}