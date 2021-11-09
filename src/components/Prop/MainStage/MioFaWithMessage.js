import React, { Component } from 'react'
import MioFa from './MioFa'
import './MioFaWithMessage.css'

export class MioFaWithMessage extends Component {
    render() {
        const { message, isPreview } = this.props
        return (
            <div className="miofa-with-message">
                <div className="message-container">
                    {message}
                </div>
                <MioFa disablePop={true} isPreview={isPreview} />
                <MioFa disablePop={true} isPreview={isPreview} />
            </div>
        )
    }
}

export default MioFaWithMessage
