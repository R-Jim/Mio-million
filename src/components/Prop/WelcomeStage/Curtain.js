import React, { Component } from 'react'
import './Curtain.css'

class Curtain extends Component {
    render() {
        const { isHorizontal = false, className = "" } = this.props
        const numberOfFrames = 8
        const frames = []
        for (let i = 0; i < numberOfFrames; i++) {
            const animationDuration = 3 / (numberOfFrames - i) + 1 + "s"
            frames.push(
                <div key={i} className={'curtain-frame ' + (isHorizontal ? 'horizontal' : 'vertical')} style={{ animationDuration }} />
            )
        }
        return (
            <div className={'curtain ' + className}>
                {frames}
            </div>
        )
    }
}

export default Curtain
