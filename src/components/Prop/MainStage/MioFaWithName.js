import React, { Component } from 'react'
import './MioFaWithName.css'

export class MioFaWithName extends Component {
    render() {
        const { name } = this.props
        return (
            <div className="miofa-with-name">
                <div className="miofa" />
                <div className="name-container">
                    {name}
                </div>
            </div>
        )
    }
}

export default MioFaWithName
