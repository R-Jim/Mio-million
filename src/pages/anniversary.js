import React, { Component } from 'react'
import AlbumStage from '../components/AlbumStage/AlbumStage';
import MioStage from '../components/MioStage/MioStage';
import MainStage from '../components/MainStage/MainStage';

const test_sample_messages = [
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        name: "name"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "name"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "name"
    }
]

const test_messages = [
    test_sample_messages[2],
    test_sample_messages[2],
    test_sample_messages[2],
    test_sample_messages[2],
    test_sample_messages[2],
    test_sample_messages[2],
    test_sample_messages[2],
]

export class Anniversary extends Component {
    state = {
        album: <AlbumStage />,
        mio: <MioStage />,
        main: <MainStage />,
    }
    render() {
        const { album, mio: main, main: message } = this.state;
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
