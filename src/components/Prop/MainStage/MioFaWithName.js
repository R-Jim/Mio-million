import React, { Component } from 'react'
import MioFa from './MioFa'
import './MioFaWithName.css'

class MioFaWithName extends Component {
    render() {
        const { name, isPreview, index = 0 } = this.props
        return (
            <div className="miofa-with-name">
                <MioFa disablePop={true} isPreview={isPreview} />
                <div className="name-container" style={{ zIndex: 11 + index }}>
                    {name}
                </div>
            </div>
        )
    }
}

export default MioFaWithName
