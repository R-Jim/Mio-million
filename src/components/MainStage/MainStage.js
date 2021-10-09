import React, { Component } from 'react'
import MessageLayoutMapping from '../LayoutMapping/MessageLayoutMapping'
import LayoutBuilder from '../LayoutBuilder/LayoutBuilder'

export class MainStage extends Component {
    render() {
        return (
            <div>
                <LayoutBuilder mapping={MessageLayoutMapping} />
            </div>
        )
    }
}

export default MainStage
