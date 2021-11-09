import React, { Component } from 'react'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Button from '../components/Navigation/Button'
import MessageSection from '../components/Section/MessageSection'
import './SendMessage.css'

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
            <div className="send-message-container">
                <div className="preview-container">
                    {this.renderPreviewMessageSection()}
                </div>
                <Form>
                    <Input type="text" title="Email" name="email" onChange={this.handleChange} placeholder="example@gmail.com" />
                    <Input type="text" title="Name" name="name" onChange={this.handleChange} placeholder="Name (10 characters max)" maxLength="10" />
                    <Input type="textarea" title="Message" name="message" onChange={this.handleChange} placeholder="Your messages for Mio. (100 characters max)" rows="4" maxLength="100" />
                    <input type="submit" value="Submit" />
                </Form>
                <Button link="/" text="Back to main" />
            </div>
        )
    }
}

export default SendMessage
