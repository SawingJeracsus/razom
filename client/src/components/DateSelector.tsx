import React, { useEffect, useState } from 'react'
import { isPropertySignature } from 'typescript'
import '../style/components/dateSelector.css'

interface DateSelectorProps  {
    title: string,
    onChange(newText: string): void
}

export const DateSelector: React.FC<DateSelectorProps> = ({title, onChange}) => {
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    
    useEffect(() => {
        day && month && year ? onChange(`${day}.${month}.${year}`) : onChange("") 
    }, [day, month, year])

    return(
        <div className="form-field">
            <div className="form-fieald__title">
                {title}
            </div>
            <input onChange={e => setDay(e.target.value)} value = {day} type="text" className="form-fieald-date__input day" placeholder="День..."/>
            <input onChange={e => setMonth(e.target.value)} value = {month} type="text" className="form-fieald-date__input month" placeholder="Місяць..."/>
            <input onChange={e => setYear(e.target.value)} value = {year} type="text" className="form-fieald-date__input year" placeholder="Рік..."/>
        </div>
    )
}
