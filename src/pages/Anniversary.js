import React, { Component } from 'react'
import MioStage from '../components/MioStage/MioStage'
import MainStage from '../components/MainStage/MainStage'
import Welcome from './Welcome'
import { connect } from 'react-redux'
import { getIsAssetLoaded } from '../reducers/stage'

class Anniversary extends Component {
    state = {
        mio: <MioStage />,
        main: <MainStage />,
    }

    renderStage = () => {
        const { isAssetLoaded } = this.props
        const { mio, main } = this.state
        return (
            <div style={isAssetLoaded ? {} : { height: '100vh', overflow: 'hidden' }}>
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


const mapStateToProps = (state) => ({
    isAssetLoaded: getIsAssetLoaded(state)
})
export default connect(mapStateToProps)(Anniversary)
