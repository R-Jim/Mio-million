import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Track.css'

export class Track extends Component {
    static propTypes = {
        direction: PropTypes.string
    }

    render = () => {
        const { direction } = this.props
        const align = direction == "left" || direction == "right" ? "horizontal" : "vertical"
        return (
            <div className={"track " + align}>
                <div className={"track-part " + direction} />
                <div className={"track-part " + direction} />
            </div>
        )
    }
}

export default Track
