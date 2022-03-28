import React, { Component } from 'react'
import './Backdrop.css'
import BackdropPlayLogo from './BackdropPlayLogo'

export class Backdrop extends Component {
    renderPlayLogosEffect = () => {
        const playLogos = []
        const maxRow = 10
        // background batch
        for (let i = 0; i < maxRow; i++) {
            const left = 95 / maxRow * i + 5 + "%"
            const blinkTick = Math.floor(Math.random() * 4) + 4 + "s"
            const moveTick = Math.floor(Math.random() * 4) + 8 + "s"
            playLogos.push(
                <BackdropPlayLogo key={i} style={{
                    left,
                    animationDuration: blinkTick + ", " + moveTick
                }} />
            )
        }

        // main batch
        for (let i = 0; i < maxRow - 4; i++) {
            const left = 80 / maxRow * i + 20 + "%"
            const blinkTick = Math.floor(Math.random() * 4) + 4 + "s"
            const moveTick = Math.floor(Math.random() * 8) + 10 + "s"
            playLogos.push(
                <BackdropPlayLogo key={i} style={{
                    left,
                    animationDuration: blinkTick + ", " + moveTick
                }} />
            )
        }
        return (
            <div className='backdrop-play-logo-container'>
                {playLogos}
            </div>
        )
    }

    render() {
        const { children } = this.props
        return (
            <div className='backdrop'>
                {this.renderPlayLogosEffect()}
                {children}
            </div>
        )
    }
}

export default Backdrop
