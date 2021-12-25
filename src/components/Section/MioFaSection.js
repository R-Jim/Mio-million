import React, { Component } from 'react'
import MioFa from '../Prop/MainStage/MioFa'
import './MioFaSection.css'

const MioFaBaseHeight = 70
const MioFaBaseWidth = 70

class MioFaSection extends Component {
    renderCells = () => {
        const { x, y } = this.props
        const cells = []
        for (let i = 0; i < x * y; i++) {
            cells.push(
                <MioFa key={i} />
            )
        }
        return cells
    }

    render() {
        const { x, y } = this.props
        const width = x * MioFaBaseWidth
        const height = y * MioFaBaseHeight
        return (
            <div className="miofa-section" style={{ width, height }}>
                {this.renderCells()}
            </div>
        )
    }
}

export default MioFaSection
