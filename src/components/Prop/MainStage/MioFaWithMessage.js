import React, { Component } from 'react'
import MioFa from './MioFa'
import './MioFaWithMessage.css'

const message_border_colors = ["#e6e7e7", "#7b96d5", "#7b96d5", "#7b96d5", "#b20335"]

class MioFaWithMessage extends Component {

    getBorderBlinkTiming = () => {
        return Math.floor(Math.random() * message_border_colors.length)
    }

    getBorderColor = (index) => {
        return message_border_colors[index]
    }

    render() {
        const { message, isPreview, index = 0 } = this.props

        const timing = this.getBorderBlinkTiming()
        const animationDuration = timing / 4 + 10 + "s"
        const borderColor = this.getBorderColor(timing)
        const boxShadow = "0 0 12px " + borderColor

        return (
            <div className="miofa-with-message">
                <div className="message-border" style={{ borderColor, boxShadow, animationDuration, zIndex: 11 + index }} />
                <div className="message-container" style={{ zIndex: 10 + index }}>
                    {message}
                </div>
                <MioFa disablePop={true} isPreview={isPreview} />
                <MioFa disablePop={true} isPreview={isPreview} />
            </div>
        )
    }
}

export default MioFaWithMessage
