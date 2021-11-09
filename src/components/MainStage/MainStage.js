import React, { Component } from 'react'
import MessageLayoutMapping from '../LayoutMapping/MessageLayoutMapping'
import MessageLayoutBuilder from '../LayoutBuilder/MessageLayoutBuilder'
import MessageStageController from '../StageController/MessageStageController'
import Button from '../Navigation/Button'

export class MainStage extends Component {
    render() {
        return (
            <div>
                <MessageStageController />
                <MessageLayoutBuilder mapping={MessageLayoutMapping} />
                <Button link="/send-message" text="Send a Message" />
            </div>
        )
    }
}

export default MainStage
