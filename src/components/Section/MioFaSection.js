import React, { Component } from 'react'
import MioFa from '../Prop/MainStage/MioFa';
import './MioFaSection.css'

export class MioFaSection extends Component {
    renderCells = () => {
        const { x, y } = this.props;
        const cells = [];
        for (let i = 0; i < x * y; i++) {
            cells.push(
                <MioFa key={i} />
            );
        }
        return cells;
    }

    render() {
        const { x, y } = this.props;
        const height = y * 70;
        const width = x * 70;
        return (
            <div className="miofa-section" style={{ width, height }}>
                {this.renderCells()}
            </div>
        )
    }
}

export default MioFaSection
