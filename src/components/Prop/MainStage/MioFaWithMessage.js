import React, { Component } from 'react'
import './MioFaWithMessage.css'

export class MioFaWithMessage extends Component {
    render() {
        const { message } = this.props
        return (
            <div className="miofa-with-message">
                <div className="message-container">
                    {message}
                </div>
                <div className="miofa-container">
                    <div className="miofa" />
                </div>
                <div className="miofa-container">
                    <div className="miofa" />
                </div>
            </div>
        )
    }
}

export default MioFaWithMessage
