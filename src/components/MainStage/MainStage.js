import React, { Component } from 'react'
import MessageLayoutMapping from '../LayoutMapping/MessageLayoutMapping'
import MessageLayoutBuilder from '../LayoutBuilder/MessageLayoutBuilder'
import MessageStageController from '../StageController/MessageStageController'
import Button, { Icon } from '../Navigation/Button'
import './MainStage.css'

class MainStage extends Component {
    render() {
        return (
            <div className="main-stage-container">
                <MessageStageController />
                <MessageLayoutBuilder mapping={MessageLayoutMapping} />
                <Button link="/send-message" text="Send a Message" icon={Icon.Plus} />
            </div>
        )
    }
}

export default MainStage
