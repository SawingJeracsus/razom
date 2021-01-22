import React from 'react'
import { isPropertySignature } from 'typescript'
import '../style/components/dateSelector.css'

interface DateSelectorProps  {
    title: string,
}

export const DateSelector: React.FC<DateSelectorProps> = ({title}) => {
    return(
        <div className="form-field">
            <div className="form-fieald__title">
                {title}
            </div>
            <input type="text" className="form-fieald-date__input day" placeholder="День..."/>
            <input type="text" className="form-fieald-date__input month" placeholder="Місяць..."/>
            <input type="text" className="form-fieald-date__input year" placeholder="Рік..."/>
        </div>
    )
}
