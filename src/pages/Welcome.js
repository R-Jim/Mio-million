import React, { Component } from 'react'
import Curtain from '../components/Prop/WelcomeStage/Curtain'
import LoadingBar from '../components/Prop/WelcomeStage/LoadingBar'
import LoadingMio from '../components/Prop/WelcomeStage/LoadingMio'
import ReadyMio from '../components/Prop/WelcomeStage/ReadyMio'
import WelcomeMessage from '../components/Prop/WelcomeStage/WelcomeMessage'
import './Welcome.css'

class Welcome extends Component {
    state = {
        isReady: false,
        isSet: false,
        isGo: false,
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isReady: true
            })
        }
            , 7000
        )
    }

    handleRemoveCurtain = () => {
        const { onFinished } = this.props;
        this.setState({
            isGo: true
        })
        setTimeout(() => {
            onFinished()
        }
            , 6000
        )
    }

    handleTransition = () => {
        this.setState({
            isSet: true
        })
        setTimeout(this.handleRemoveCurtain, 1000)
    }

    renderCurtain = () => {
        return (
            <div className="curtain-container">
                <div className="mio-stage-curtain">
                    <Curtain isHorizontal={true} />
                </div>
                <div className="main-stage-curtain-container">
                    <Curtain className="left" />
                    <Curtain className="right" />
                </div>
            </div>
        )
    }

    renderWelcome = () => {
        const { isReady, isSet } = this.state
        const animation = "hide-welcome-container-animate 1s linear 1"
        return (
            <div className="welcome-container">
                <div style={isSet ? { animation } : {}}>
                    <div className='welcome-stage'>
                        {isReady ?
                            <ReadyMio onClick={this.handleTransition} />
                            : <LoadingMio />}
                        <LoadingBar />
                    </div>
                    <WelcomeMessage />
                </div>
            </div>
        )
    }

    render() {
        const { isGo } = this.state
        return isGo ? this.renderCurtain() : this.renderWelcome()
    }
}

export default Welcome
