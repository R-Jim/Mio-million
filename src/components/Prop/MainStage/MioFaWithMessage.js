import React, { Component } from 'react'
import MioFa from './MioFa'
import './MioFaWithMessage.css'

const message_border_colors = ["#e6e7e7", "#7b96d5", "#7b96d5", "#7b96d5", "#b20335"]

export class MioFaWithMessage extends Component {
    render() {
        const { message, isPreview } = this.props
        const borderColor = message_border_colors[Math.floor(Math.random() * message_border_colors.length)]
        return (
            <div className="miofa-with-message">
                <div className={"message-container" + (message.length > 100 ? " big" : "")} style={{ borderColor }}>
                    {message}
                </div>
                <MioFa disablePop={true} isPreview={isPreview} />
                <MioFa disablePop={true} isPreview={isPreview} />
            </div>
        )
    }
}

export default MioFaWithMessage
