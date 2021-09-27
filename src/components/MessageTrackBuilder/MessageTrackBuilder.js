import React, { Component } from 'react'
import MessageTrack from '../MessageTrack/MessageTrack'

export class MessageTrackBuilder extends Component {
    render() {
        return (
            <div>
                <MessageTrack />
                <MessageTrack />
                <MessageTrack />
                <MessageTrack />
            </div>
        )
    }
}

export default MessageTrackBuilder
