import React from 'react'
import './button.css'

export default props =>
    <button className={`button ${props.class}`} onClick={event => props.click && props.click(props.label)}>{props.label}</button>