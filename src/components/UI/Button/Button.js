import React from 'react'
import './Button.css';

const Button = ({text, clicked, type, disable}) => {
    const btnType = type

    
    return (
        <>
            <button className={type} onClick={clicked} disabled={disable}>{text}</button>
        </>
    )
}

export default Button
