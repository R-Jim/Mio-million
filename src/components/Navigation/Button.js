import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

export class Button extends Component {
    render() {
        const { link, text } = this.props;

        return (
            <div className="navigation-button">
                <Link to={link}>
                    <button type="button">
                        {text}
                    </button>
                </Link>
            </div>
        )
    }
}

export default Button
