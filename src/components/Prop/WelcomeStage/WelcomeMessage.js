import React, { Component } from 'react'
import Plus from '../../../assets/button/Hairpin-1.png'
import './WelcomeMessage.css'

class WelcomeMessage extends Component {
    render() {
        return (
            <div className="welcome-message-container">
                <div className="welcome-message">
                    Happy 3rd Anniversary, Mio!!.
                </div>
                <div className="the-mion-family-tag">
                    The Mio-n Family~!
                    <img src={Plus} width="40" height="20" alt="" />
                </div>
            </div>
        )
    }
}

export default WelcomeMessage
