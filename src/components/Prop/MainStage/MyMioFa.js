import React, { Component } from 'react'
import './MyMioFa.css'
import MioFa1 from '../../../assets/prop/fan/miofa-1.png'
import MioFa2 from '../../../assets/prop/fan/miofa-2.png'

const defaultFrames = [
    MioFa1,
    MioFa2
]

class MyMioFa extends Component {
    getDefautState = () => ({
        isDespawn: false,
        currentIndex: 0,
    })

    state = this.getDefautState()

    resetState = () => {
        this.setState(this.getDefautState());
    }

    isFramesChange = (nextProps) => {
        const { frames } = this.props;
        const { frames: nextFrames } = nextProps;
        if (nextFrames.length != frames.length) {
            return true;
        }
        nextFrames.forEach((url, index) => {
            if (frames[index] != url) {
                return true;
            }
        });
        return false;
    }

    shouldComponentUpdate = (nextProps) => {
        if (this.props.isPreview) {
            return false;
        }

        if (this.isFramesChange(nextProps)) {
            this.setState({ isDespawn: true })
            this.updateTimeOut = setTimeout(
                this.resetState.bind(this)
                , 1000
            )
        }
        return true;
    }

    componentWillUnmount = () => {
        clearTimeout(this.updateTimeOut)
        clearInterval(this.updateIndex)
    }

    getFrames = () => {
        let { frames = [] } = this.props;
        if (frames.length == 0) {
            return defaultFrames;
        }
        return frames;
    }

    getFrameIndex = () => {
        const frames = this.getFrames();

        let { currentIndex } = this.state;
        currentIndex++;
        if (!frames || currentIndex >= frames.length) {
            return 0;
        }
        return currentIndex;
    }

    updateIndex = () => {
        const currentIndex = this.getFrameIndex();
        this.setState({
            currentIndex
        })
    }

    componentDidMount = () => {
        setTimeout(() => { this.animationInterval = setInterval(this.updateIndex.bind(this), 500) }
            , 500
        )
    }

    render() {
        const { isDespawn, currentIndex } = this.state;
        const frame = this.getFrames()[currentIndex]

        const animationName = isDespawn ? "miofa-despawn" : "miofa-spawn";
        const animationConfig = {
            animationName,
            animationDuration: isDespawn ? "2s" : "1s",
            animationDelay: "0s"
        }

        return (
            <div className="my-miofa-container" style={animationConfig} onLoad={this.check}>
                <img src={frame} width="90" height="90" />
            </div>
        )
    }
}

export default MyMioFa
