import React, { Component } from 'react'
import MioFa from '../Prop/MainStage/MioFa'
import MioFaWithMessage from '../Prop/MainStage/MioFaWithMessage'
import MioFaWithName from '../Prop/MainStage/MioFaWithName'
import './MessageSection.css'

export class MessageSection extends Component {
    renderMioFa = (_, index) => {
        const { isPreview } = this.props;
        return <MioFa key={index} isPreview={isPreview} />
    }

    renderMioFas = (number) => {
        return Array.from(Array(number)).map(this.renderMioFa)
    }

    render() {
        const { message = "your_message", name = "name", isPreview } = this.props
        return (
            <div className="message-section-container">
                {/* 3x4 */}
                {this.renderMioFas(5)}
                <MioFaWithMessage message={message} isPreview={isPreview} />
                {this.renderMioFas(3)}
                <MioFaWithName name={name} isPreview={isPreview} />
                {this.renderMioFas(1)}
            </div>
        )
    }
}

export default MessageSection
