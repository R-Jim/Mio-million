import React, { Component } from 'react'
import MioFa from './MioFa'
import './MioFaWithMessage.css'

export class MioFaWithMessage extends Component {
    render() {
        const { message } = this.props
        return (
            <div className="miofa-with-message">
                <div className="message-container">
                    {message}
                </div>
                <MioFa disablePop={true} />
                <MioFa disablePop={true} />
            </div>
        )
    }
}

export default MioFaWithMessage
