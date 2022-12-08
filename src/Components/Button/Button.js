import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

function Button({text, top, left, link}) {

    return (
        <Link to={`/${link}`}>
            <div className='button-properties' style={{top: top, left: left}}>
                {text}
            </div>
        </Link>
    )
}

export default Button;