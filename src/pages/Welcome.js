import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button, { Icon } from '../components/Navigation/Button'
import Curtain from '../components/Prop/WelcomeStage/Curtain'
import GameScreen from '../components/Prop/WelcomeStage/GameScreen'
import LoadingBar from '../components/Prop/WelcomeStage/LoadingBar'
import LoadingMio from '../components/Prop/WelcomeStage/LoadingMio'
import WelcomeMessage from '../components/Prop/WelcomeStage/WelcomeMessage'
import { getIsAssetLoaded, markAssetAsLoaded } from '../reducers/stage'
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
        const { markAssetAsLoaded } = this.props
        this.setState({
            isGo: true
        })
        setTimeout(() => {
            markAssetAsLoaded()
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
                            <span className='score'>SCORE: 1000K</span>
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
        const { isGo } = this.state
        const { isAssetLoaded } = this.props
        if (isAssetLoaded) {
            return (
                <div />
            )
        }
        return isGo ? this.renderCurtain() : this.renderWelcome()
    }
}

const mapStateToProps = (state) => ({
    isAssetLoaded: getIsAssetLoaded(state)
})

const mapDispatchToProps = {
    markAssetAsLoaded,
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
