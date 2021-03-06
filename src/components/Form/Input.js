import React, { Component } from 'react'
import './Input.css'
import MultipleInput from './MultipleInput'
import TextareaInput from './TextareaInput'

class Input extends Component {
    render() {
        const { type, title, name, onChange, value, placeholder, ...other } = this.props
        switch (type) {
            case "multi":
                return <MultipleInput title={title} type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} {...other} />
            case "textarea":
                return <TextareaInput title={title} type={type} value={value ?? ""} name={name} onChange={onChange} placeholder={placeholder} {...other} />
            default:
                return (
                    <label className="input">
                        <input className={type == "checkbox" ? "checkbox" : ""} type={type} name={name} value={value ?? ""} onChange={onChange} placeholder={placeholder} {...other} />
                        <span>{title}:</span>
                    </label>
                )
        }
    }
}

export default Input
