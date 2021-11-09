import React, { Component } from 'react'
import MioStage from '../components/MioStage/MioStage';
import MainStage from '../components/MainStage/MainStage';
import { Route, Routes } from 'react-router';
import SendMessage from './SendMessage'

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
                <Routes>
                    <Route path="/" element={main} />
                    <Route path="/send-message" element={<SendMessage />} />
                </Routes>
            </>
        )
    }
}

export default Anniversary
