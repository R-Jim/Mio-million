import React, { Component } from 'react'
import './MioFa.css'

const getPopTime = (props) => {
    const { disablePop } = props
    if (disablePop) {
        return 0;
    }
    return Math.floor(Math.random() * 3) * Math.floor(Math.random() * 3 + 2)
}

export class MioFa extends Component {
    getDefautState = () => ({
        popTime: getPopTime(this.props),
        isDespawn: false,
    })

    state = this.getDefautState()

    getSpawnTime = () => {
        const { popTime } = this.state;
        return .5 + Math.floor(popTime / 6)
    }

    resetState = () => {
        this.setState(this.getDefautState());
    }

    shouldComponentUpdate = (nextProps) => {
        if (this.props.isPreview) {
            return false;
        }

        if (nextProps !== this.props) {
            this.setState({ isDespawn: true })
            this.updateTimeOut = setTimeout(
                this.resetState.bind(this)
                , this.getSpawnTime() * 1000
            )
        }
        return true;
    }

    componentWillUnmount = () => {
        clearTimeout(this.updateTimeOut)
    }

    getMiofaClass = () => {
        const miofaClasses = ["normal", "normal", "normal", "normal", "normal", "headband"]
        return miofaClasses[Math.floor(Math.random() * miofaClasses.length)]
    }

    render() {
        const { popTime, isDespawn } = this.state;

        const spawnTime = isDespawn ? this.getSpawnTime() * 2 : this.getSpawnTime();
        const animationName = isDespawn ? "miofa-despawn" : "miofa-spawn, miofa-animate";
        const animationConfig = {
            animationName,
            animationDuration: spawnTime + "s, " + popTime + "s",
            animationDelay: "0s, " + spawnTime + "s"
        }
        return (
            <div className="miofa-container" style={animationConfig} onLoad={this.check}>
                {/* {popTime !== 0 ? <div className="debug-indicator">{popTime}</div> : null} */}
                <div className={"miofa " + this.getMiofaClass()} />
            </div>
        )
    }
}

export default MioFa
