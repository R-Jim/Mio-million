import React, { Component } from 'react'
import MioFa from './MioFa'
import './MioFaWithName.css'

export class MioFaWithName extends Component {
    render() {
        const { name, isPreview } = this.props
        return (
            <div className="miofa-with-name">
                <MioFa disablePop={true} isPreview={isPreview} />
                <div className="name-container">
                    {name}
                </div>
            </div>
        )
    }
}

export default MioFaWithName
