import React, { useState } from 'react';

import { navData } from "../../config/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from "react-router-dom";
import "./Sidenav.css";

export default function Sidenav() {

    const [open, setopen] = useState(true)

    const toggleOpen = () => {
        setopen(!open)
    }

    return (
        <div className={open ? 'sidenav' : 'sidenavClosed'}>
            <button className="menuBtn" onClick={toggleOpen}>
                {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
            </button>
            {navData.map(item => {
                return <NavLink key={item.id} className="sideitem" to={item.link}>
                    {item.icon}
                    <span className={open ? 'linkText' : 'linkTextClosed'}>{item.text}</span>
                </NavLink>
            })}
        </div>
    )
}