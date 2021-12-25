import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Plus from '../../assets/button/Hairpin-1.png'
import Next from '../../assets/button/Hairpin-3.png'
import './Button.css'

class Button extends Component {
    render() {
        const { link, text, icon = Next } = this.props
        return (
            <div className="navigation-button">
                <Link to={link}>
                    <button type="button">{text}</button>
                    <img src={icon} width="50" height="30" alt="" />
                </Link>
            </div>
        )
    }
}

export const Icon = { Next, Plus }

export default Button
