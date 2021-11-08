import React, { Component } from 'react'
import './Input.css'
import TextareaInput from './TextareaInput';

class Input extends Component {
    render() {
        const { type, title, name, onChange, placeholder, ...other } = this.props;
        if (type === "textarea") {
            return <TextareaInput title={title} type={type} name={name} onChange={onChange} placeholder={placeholder} {...other} />
        }
        return (
            <label className="input">
                <input type={type} name={name} onChange={onChange} placeholder={placeholder} {...other} />
                <span>{title}:</span>
            </label>
        )
    }
}

export default Input
