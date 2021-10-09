import React, { Component } from 'react'
import MioFa from '../Prop/MainStage/MioFa';
import './MioFaSection.css'

export class MioFaSection extends Component {
    renderCells = () => {
        const { x, y } = this.props;
        const cells = [];
        for (let i = 0; i < x * y; i++) {
            cells.push(
                <MioFa />
            );
        }
        return cells;
    }

    render() {
        const { x } = this.props;
        const width = x * 60;
        return (
            <div className="miofa-container" style={{ width }}>
                {this.renderCells()}
            </div>
        )
    }
}

export default MioFaSection
