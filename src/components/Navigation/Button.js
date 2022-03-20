import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Plus from '../../assets/button/Hairpin-1.png'
import Next from '../../assets/button/Hairpin-3.png'
import './Button.css'

class Button extends Component {
    render() {
        const { link, text, icon = Next, onClick } = this.props
        return (
            <div className="navigation-button">
                {link ?
                    <Link to={link}>
                        <button type="button" onClick={onClick}>{text}</button>
                        <img src={icon} alt="" />
                    </Link>
                    :
                    <>
                        <button type="button" onClick={onClick}>{text}</button>
                        <img src={icon} alt="" />
                    </>
                }

            </div>
        )
    }
}

export const Icon = { Next, Plus }

export default Button
