import React, { Component } from 'react'
import MioFa from '../Prop/MainStage/MioFa'
import MioFaWithMessage from '../Prop/MainStage/MioFaWithMessage'
import MioFaWithName from '../Prop/MainStage/MioFaWithName'
import MyMioFa from '../Prop/MainStage/MyMioFa'
import './MessageSection.css'

class MessageSection extends Component {
    renderMioFa = (_, index) => {
        const { isPreview } = this.props
        return <MioFa key={index} isPreview={isPreview} />
    }

    renderMioFas = (number) => {
        return Array.from(Array(number)).map(this.renderMioFa)
    }

    getMessageSize = () => {
        let { message } = this.props
        if (message == null) {
            message = ""
        }
        let messageSize = 0
        message.split("").forEach(character => {
            if (character.match('[a-zA-Z0-9! &.,-~\']')) {
                messageSize++
            } else {
                // console.log("'" + character + "'");
                messageSize += 2.5
            }
        })
        // console.log(messageSize);
        if (messageSize < 70) {
            return ""
        } else if (messageSize < 190) {
            return "big"
        } else {
            return "extra-big"
        }
    }

    render() {
        const { message = "Your messages for Mio.", name = "- MioFa -", frames = [], isPreview, index = 0 }
            = this.props
        return (
            <div className={"message-section-container " + this.getMessageSize()}>
                {/* 3x4 */}
                {this.renderMioFas(5)}
                <MioFaWithMessage message={message} isPreview={isPreview} index={index} />
                {this.renderMioFas(2)}
                <MyMioFa frames={frames} index={index} />
                <MioFaWithName name={name} isPreview={isPreview} index={index} />
                {this.renderMioFas(1)}
            </div>
        )
    }
}

export default MessageSection
