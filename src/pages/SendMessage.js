import React, { Component } from 'react'
import MessageSection from '../components/Section/MessageSection'

class SendMessage extends Component {
    state = {
        message: "Your messages for Mio.",
        name: "- MioFa -",
    }

    renderPreviewMessageSection = () => {
        const { message, name } = this.state
        return (
            <MessageSection message={message} name={name} isPreview={true} />
        )
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                {this.renderPreviewMessageSection()}
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleChange} placeholder="- MioFa -" />
                    </label>
                    <label>
                        Message:
                        <input type="text" name="message" onChange={this.handleChange} placeholder="Your messages for Mio." />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SendMessage
