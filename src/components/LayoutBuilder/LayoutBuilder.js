import React, { Component } from 'react'
import { LAYOUTS } from '../../configs/configs';
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

    mapSection = (key, index) => {
        const { mapping } = this.props;
        const section = mapping[key] ?? this.getDefaultSection(key);
        return { ...section, key: index };
    }

    getMappedSectionsToLayout = (layout) => {
        if (layout == null) {
            return;
        }
        return layout.map(this.mapSection);
    }

    getLayouts = () => {
        return []
    }

    getLayout = () => {
        const layouts = this.getLayouts();
        const layoutIndex = Math.floor(Math.random() * layouts.length);
        return layouts[layoutIndex];
    }

    render() {
        return (
            <div className="layout-container">
                {this.getMappedSectionsToLayout(this.getLayout())}
            </div>
        )
    }
}

export default LayoutBuilder
