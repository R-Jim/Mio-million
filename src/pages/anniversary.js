import React, { Component } from 'react'
import AlbumStage from '../components/AlbumStage/AlbumStage';
import MainStage from '../components/MainStage/MainStage';
import MessageStage from '../components/MessageStage/MessageStage';
export class Anniversary extends Component {
    state = {
        album: <AlbumStage />,
        main: <MainStage />,
        message: <MessageStage />,
    }
    render() {
        const { album, main, message } = this.state;
        return (
            <>
                {album}
                {main}
                {message}
            </>
        )
    }
}

export default Anniversary
