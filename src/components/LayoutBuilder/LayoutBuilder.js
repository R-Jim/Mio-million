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

    getAdditionProperties = () => {
        return {}
    }

    getMappedSectionToLayout = (layout) => {
        const { mapping } = this.props;
        if (layout == null) {
            return;
        }
        return layout.filter(key => key).map(
            (key, index) => {
                const section = mapping[key] ?? this.getDefaultSection(key);
                return { ...section, ...this.getAdditionProperties() , key: index };
            }
        );
    }

    getLayout = (layouts) => {
        const layoutIndex = Math.floor(Math.random() * layouts.length);
        return layouts[layoutIndex];
    }

    render() {
        return (
            <div className="layout-container">
                {this.getMappedSectionToLayout(this.getLayout(LAYOUTS))}
            </div>
        )
    }
}

export default LayoutBuilder
