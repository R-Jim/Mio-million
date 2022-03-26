import React, { Component } from 'react'
import './BackdropPlayLogo.css'

export class BackdropPlayLogo extends Component {
    render() {
        const { style } = this.props
        return (
            <div className='backdrop-play-logo' style={{...style}} />
        )
    }
}

export default BackdropPlayLogo
