import React, { Component } from 'react'
import './MioFa.css'

export class MioFa extends Component {
    getRandomAnimationDuration = () => {
        return Math.floor(Math.random() * 3) * Math.floor(Math.random() * 3 + 2)
    }

    
    render() {
        const rand = this.getRandomAnimationDuration()
        return (
            <div className="miofa-container" style={{ animationDuration: rand + "s" }}>
                <div className="debug-indicator">{rand}</div>
                <div className="miofa" />
            </div>
        )
    }
}

export default MioFa
