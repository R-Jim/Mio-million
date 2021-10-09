import React, { Component } from 'react'
import './Album.css'
import Mio from '../../assets/gallery/mio.jfif'

export class Album extends Component {
    render() {
        return (
            <div>
                <img className="frame" src={Mio} />
            </div>
        )
    }
}

export default Album
