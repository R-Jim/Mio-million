import React, { Component } from 'react'
import Button, { Icon } from '../components/Navigation/Button'
import Curtain from '../components/Prop/WelcomeStage/Curtain'
import GameScreen from '../components/Prop/WelcomeStage/GameScreen'
import LoadingBar from '../components/Prop/WelcomeStage/LoadingBar'
import LoadingMio from '../components/Prop/WelcomeStage/LoadingMio'
import WelcomeMessage from '../components/Prop/WelcomeStage/WelcomeMessage'
import './Welcome.css'

class Welcome extends Component {
    state = {
        isReady: false,
        isSet: false,
        isGo: false,
        isFinished: false,
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
        this.setState({
            isGo: true
        })
        setTimeout(() => {
            this.setState({
                isFinished: true
            })
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
                        <div className='mio-info-panel'>
                            <span className='score'>SCORE: 999K</span>
                            <span className='name'>OOKAMI MIO</span>
                            <GameScreen />
                        </div>
                        <LoadingMio />
                        <LoadingBar />
                        {isReady ?
                            <div className='welcome-action'>
                                <Button onClick={this.handleTransition} text="See Messages" icon={Icon.Next} />
                            </div>
                            : <div />}
                    </div>
                    <WelcomeMessage />
                </div>
            </div>
        )
    }

    render() {
        const { isFinished, isGo } = this.state
        if (isFinished) {
            return (
                <div />
            )
        }
        return isGo ? this.renderCurtain() : this.renderWelcome()
    }
}

export default Welcome
