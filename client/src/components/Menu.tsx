import React from 'react'
import MenuIcon from '../assetes/menu.svg'
import Logo from '../assetes/logo.png'
import '../style/components/menu.css'
import THEME from '../THEME'


interface MenuPunct{
    title: string,
    color: string,
    selected?: boolean
}

const MenuPunct: React.FC<MenuPunct> = ({title, color, selected}) => {
    return(
        <div className={!selected ? "menu__punct": "menu__punct selected"} style={{
            backgroundColor: color
        }}>{title}</div>
    )
}
MenuPunct.defaultProps = {
    selected: false
}

interface MenuProps{
    visible: boolean,
    onToggle(): void
}

export const Menu: React.FC<MenuProps> = ({visible, onToggle}) => {
    return(
        <div className={visible ? "menu" : "menu hidden" }>
            <p className="menu__logo-wrapper">
                <img src={Logo} alt="logo"/>
            </p>
            <div className="menu__puncts">
                <MenuPunct selected={true} title="Головна" color={THEME.DARK_GREEN}/>
            </div>
            <button onClick = {onToggle} className="btn menu__btn-toggle">&times;</button>
        </div>
    )
}

interface ToggleMenuProps {
    onToggle(): void
}

export const ToggleMenu: React.FC<ToggleMenuProps> = ({onToggle}) => {
    return(
        <button className="btn menu__toggle" onClick={onToggle}>
            <img src={MenuIcon} alt="menu btn"/>
        </button>
    )
}


