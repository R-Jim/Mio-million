import React, { Component } from 'react'
import Message from '../Message/Message'
import './MessageHolder.css'

export class MessageHolder extends Component {
    state = {
        rand: Math.floor(Math.random() * 5) * Math.floor(Math.random() * 3 + 2)
    }
    render() {
        const { rand } = this.state;
        return (
            <div className="message-holder" style={{ animationDuration: rand + "s" }}>
                <Message />
                <div className="debug-indicator">{rand}</div>
                <div className="message-fan-holder" />
            </div>
        )
    }
}

export default MessageHolder
