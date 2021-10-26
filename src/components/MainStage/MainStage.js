import React, { Component } from 'react'
import MessageLayoutMapping from '../LayoutMapping/MessageLayoutMapping'
import MessageLayoutBuilder from '../LayoutBuilder/MessageLayoutBuilder'

export class MainStage extends Component {
    render() {
        return (
            <div>
                <MessageLayoutBuilder mapping={MessageLayoutMapping} />
            </div>
        )
    }
}

export default MainStage
