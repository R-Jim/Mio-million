import React, { Component } from 'react'
import './Input.css'

class TextareaInput extends Component {
    render() {
        const { type, title, name, onChange, placeholder, ...other } = this.props;

        return (
            <label className="input">
                <textarea name={name} onChange={onChange} placeholder={placeholder} {...other} />
                <span>{title}:</span>
            </label>
        )
    }
}

export default TextareaInput
