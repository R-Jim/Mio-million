import React, { Component } from 'react'
import MioFa from './MioFa'
import './MioFaWithName.css'

export class MioFaWithName extends Component {
    render() {
        const { name } = this.props
        return (
            <div className="miofa-with-name">
                <MioFa disablePop={true} />
                <div className="name-container">
                    {name}
                </div>
            </div>
        )
    }
}

export default MioFaWithName
