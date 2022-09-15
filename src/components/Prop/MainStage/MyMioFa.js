import React, { Component } from 'react'
import './MyMioFa.css'
import MioFa1 from '../../../assets/prop/fan/MiochunRig-Front.png'
import MioFa2 from '../../../assets/prop/fan/MiochunRig-Front2.png'
import MioFaError from '../../../assets/prop/fan/MiochunRig-Error.png'

const defaultFrames = [
    MioFa2,
    MioFa1,
]

class MyMioFa extends Component {
    getDefautState = () => ({
        isDespawn: false,
        currentIndex: 0,
        errorFrameIndexes: [],
    })

    state = this.getDefautState()

    resetState = () => {
        this.setState(this.getDefautState())
    }

    isFramesChange = (nextProps) => {
        const { frames } = this.props
        const { frames: nextFrames } = nextProps
        if (nextFrames.length !== frames.length) {
            return true
        }
        nextFrames.forEach((url, index) => {
            if (frames[index] !== url) {
                return true
            }
        })
        return false
    }

    shouldComponentUpdate = (nextProps) => {
        if (this.props.isPreview) {
            return false
        }

        if (this.isFramesChange(nextProps)) {
            this.setState({ isDespawn: true })
            this.updateTimeOut = setTimeout(
                this.resetState.bind(this)
                , 1000
            )
        }
        return true
    }

    componentWillUnmount = () => {
        clearTimeout(this.updateTimeOut)
        clearInterval(this.updateIndex)
    }

    getFrames = () => {
        let { frames = [] } = this.props
        if (frames.length === 0) {
            return defaultFrames
        }
        // update url when move to offline
        return frames.map(frame =>{ const a = frame.replace("https://assets.miosha.moe/million", "/miofa"); console.log(a); return a})
    }

    getNextFrameIndex = () => {
        const frames = this.getFrames()
        let { currentIndex } = this.state
        if (!frames || ++currentIndex >= frames.length) {
            return 0;
        }
        return currentIndex
    }

    updateIndex = () => {
        const nextIndex = this.getNextFrameIndex()
        this.setState({
            currentIndex: nextIndex
        })
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.animationInterval = setInterval(
                this.updateIndex.bind(this), 500
            )
        }
            , 500
        )
    }

    setErrorFrame = (index) => {
        const { errorFrameIndexes } = this.state
        errorFrameIndexes.push(index)
        this.setState({
            errorFrameIndexes
        })
    }

    renderFrames = () => {
        const { currentIndex, errorFrameIndexes } = this.state
        return (
            <div>
                {this.getFrames().map((frame, index) =>
                    <img
                        key={index}
                        src={errorFrameIndexes.find(i => i === index) !== undefined ? MioFaError : frame}
                        width={currentIndex === index ? "90" : "0"}
                        height="90"
                        alt=""
                        onError={() => this.setErrorFrame(index)} />
                )}
            </div>
        )
    }

    render() {
        const { isDespawn } = this.state

        const animationName = isDespawn ? "miofa-despawn" : "miofa-spawn"
        const animationConfig = {
            animationName,
            animationDuration: isDespawn ? "2s" : "1s",
            animationDelay: "0s"
        }

        const { index = 0 } = this.props

        return (
            <div className="my-miofa-container" style={{ ...animationConfig, zIndex: 12 + index }} onLoad={this.check}>
                {this.renderFrames()}
            </div>
        )
    }
}

export default MyMioFa
