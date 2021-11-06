import React, { Component } from 'react'
import MioStage from '../components/MioStage/MioStage';
import MainStage from '../components/MainStage/MainStage';

export class Anniversary extends Component {
    state = {
        mio: <MioStage />,
        main: <MainStage />,
    }
    render() {
        const { mio, main } = this.state;
        return (
            <>
                {mio}
                {main}
            </>
        )
    }
}

export default Anniversary
