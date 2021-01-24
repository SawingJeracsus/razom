import React, { useState } from 'react'
import LogoIMG from '../assetes/logo.png'
import '../style/components/header.css'
import {Menu, ToggleMenu} from './Menu'

export const Header: React.FC = () => {
    const [visibleMenu, setVisibleMenu] = useState(false)
    
    return (
        <>
            <header>
                <div className="header__wrapper-logo">
                    <img src={LogoIMG} alt="logo"/>
                </div>
                <h1 className="header__title">Razom</h1>
                <ToggleMenu onToggle={() => { setVisibleMenu(true) } }/>    
            </header>
            <Menu visible={visibleMenu} onToggle={() => setVisibleMenu(false)}/>
        </>
    )
}