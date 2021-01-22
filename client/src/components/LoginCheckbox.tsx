import React from 'react'
import '../style/components/checkBox.css'


interface LoginCheckboxProps{
    title: string
}

export const LoginCheckbox: React.FC<LoginCheckboxProps> = ({title}) => {
    const id = Date.now().toString()
    
    return(
        <div className="form-field__checkbox">
            <input type="checkbox" className="input_form-field__checkbox" id={`checkbox_${id}`}/>
            <label htmlFor={`checkbox_${id}`}>{title}</label>
        </div>
    )       
}