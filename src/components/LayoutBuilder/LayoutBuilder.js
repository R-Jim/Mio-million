import React, { Component } from 'react'
import { RESOLUTION } from '../../configs/configs';
import { getLayoutForResolution } from '../Layout/Layout'
import MioFaSection from '../Section/MioFaSection';
import './LayoutBuilder.css'

export class LayoutBuilder extends Component {

    getDefaultSection = (key) => {
        const dimentions = key.split('x');
        const x = dimentions[0];
        const y = dimentions[1];
        return (
            <MioFaSection x={x} y={y} />
        )
    }

    getMappedSectionToLayout = (layout) => {
        const { mapping } = this.props;
        if (layout == null) {
            return;
        }
        return layout.filter(key => key).map(
            (key, index) => {
                const section = mapping[key] ?? this.getDefaultSection(key);
                return { ...section, key: index };
            }
        );
    }

    render() {
        const layout = getLayoutForResolution(RESOLUTION._9x6);
        return (
            <div className="layout-container">
                {this.getMappedSectionToLayout(layout)}
            </div>
        )
    }
}

export default LayoutBuilder
