import React, { Component } from 'react'
import Mio from '../Prop/MioStage/Mio'
import './MioStage.css'

class MioStage extends Component {
    render() {
        return (
            <div className="mio-stage-backdrop">
                <div className="mio-stage">
                    <Mio />
                </div>
            </div>
        )
    }
}

export default MioStage
