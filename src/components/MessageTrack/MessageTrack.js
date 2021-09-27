import React, { Component } from 'react'
import MessageHolder from '../MessageHolder/MessageHolder'
import './MessageTrack.css'

export class MessageTrack extends Component {
    render() {
        return (
            <div className="message-track">
                <MessageHolder />
                <MessageHolder />
                <MessageHolder />
                <MessageHolder />
                <MessageHolder />
                <MessageHolder />
                <MessageHolder />
                <MessageHolder />
            </div>
        )
    }
}

export default MessageTrack
