import React, { Component } from 'react'
import MioStage from '../components/MioStage/MioStage';
import MainStage from '../components/MainStage/MainStage';
import Welcome from './Welcome';

export class Anniversary extends Component {
    state = {
        mio: <MioStage />,
        main: <MainStage />,
        isReady: false,
    }

    handleReady = () => {
        this.setState({
            isReady: true
        })
    }

    render() {
        const { mio, main, isReady } = this.state;
        return (
            <>
                {isReady ? <div /> : <Welcome onFinished={this.handleReady} />}
                {mio}
                {main}
            </>
        )
    }
}

export default Anniversary
