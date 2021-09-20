import React, { Component } from 'react'
export class anniversary extends Component {
    state = {
        album: null,
        main: null,
        message: null,
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

export default anniversary
