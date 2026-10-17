import React from "react";
import './Button.css';

export default function Button ({
    text,
    onClick,
    disabled = false,
    variant='primary'
}){
    return (
        <button 
            className={`button ${variant}-btn`} 
            onClick={onClick} 
            disabled={disabled}
        >
            {text}
        </button>
    )
}
