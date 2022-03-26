import React, { Component } from 'react'
import Backdrop from '../Prop/MioStage/Backdrop'
import Mio from '../Prop/MioStage/Mio'
import './MioStage.css'

class MioStage extends Component {
    render() {
        return (
            <Backdrop>
                <div className="mio-stage">
                    <Mio />
                </div>
            </Backdrop>
        )
    }
}

export default MioStage
