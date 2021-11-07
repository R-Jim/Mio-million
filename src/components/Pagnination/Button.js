import React, { Component } from 'react'
import './Button.css'

export class Button extends Component {
    render() {
        const { disabled, onClick, className } = this.props;
        return (
            <div className={"pagination-button " + className + (disabled ? " disabled" : "")} onClick={disabled ? null : onClick} />
        )
    }
}

export default Button
