import React, { Component } from 'react'
import MessageLayoutMapping from '../LayoutMapping/MessageLayoutMapping'
import MessageLayoutBuilder from '../LayoutBuilder/MessageLayoutBuilder'
import MessageStageController from '../StageController/MessageStageController'

export class MainStage extends Component {
    render() {
        return (
            <div>
                <MessageStageController/>
                <MessageLayoutBuilder mapping={MessageLayoutMapping} />
            </div>
        )
    }
}

export default MainStage
