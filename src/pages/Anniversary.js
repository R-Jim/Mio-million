import React, { Component } from 'react'
import MioStage from '../components/MioStage/MioStage'
import MainStage from '../components/MainStage/MainStage'
import Welcome from './Welcome'
import { readyPage, getMessagesState } from '../reducers/stage'
import { connect } from 'react-redux';

class Anniversary extends Component {
    state = {
        mio: <MioStage />,
        main: <MainStage />,
    }

    render() {
        const { mio, main } = this.state
        const { isReady, readyPage } = this.props
        return (
            <>
                {isReady ? <div /> : <Welcome onFinished={readyPage} />}
                {mio}
                {main}
            </>
        )
    }
}

const mapDispatchToProps = {
    readyPage,
}

function mapStateToProps(state) {
    return {
        isReady: getMessagesState(state).isReady
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Anniversary)
