import React, { Component } from 'react'
import MioStage from '../components/MioStage/MioStage'
import MainStage from '../components/MainStage/MainStage'
import Welcome from './Welcome'

class Anniversary extends Component {
    state = {
        mio: <MioStage />,
        main: <MainStage />,
    }

    renderStage = () => {
        const { mio, main } = this.state
        return (
            <div>
                {mio} {main}
            </div>
        )
    }

    render() {
        return (
            <>
                <Welcome />
                {this.renderStage()}
            </>
        )
    }
}



export default Anniversary
