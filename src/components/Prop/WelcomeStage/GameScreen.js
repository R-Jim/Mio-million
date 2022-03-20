import React, { Component } from 'react'
import './GameScreen.css'

class GameScreen extends Component {
    render() {
        return (
            <div className='game-screen'>
                <div className='invader left' />
                <div className='invader right' />
                <div className='shot left' />
                <div className='shot right' />
            </div>
        )
    }
}

export default GameScreen
