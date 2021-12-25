import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    render() {
        const { children } = this.props
        return (
            <form className="form-container">
                {children}
            </form>
        )
    }
}

export default Form
