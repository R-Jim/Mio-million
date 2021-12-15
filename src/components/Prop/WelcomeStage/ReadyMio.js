import React, { Component } from 'react'
import './ReadyMio.css'

class ReadyMio extends Component {
    render() {
        const { onClick } = this.props
        return (
            <div className="mio ready" onClick={onClick} />
        )
    }
}

export default ReadyMio
