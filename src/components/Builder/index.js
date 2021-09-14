import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Track from '../Track';

export class Builder extends Component {
    static propTypes = {
        numberOfTile: PropTypes.number,
        direction: PropTypes.string,
    }

    renderTracks = () => {
        const { numberOfTile, direction } = this.props;
        const tracks = [];
        for (let i = 0; i < numberOfTile; i++) {
            tracks.push(<Track direction={direction} />)
        }
        return (
            <div className="track-container">
                {tracks}
            </div>
        )
    }

    render() {
        return this.renderTracks();
    }
}

export default Builder
