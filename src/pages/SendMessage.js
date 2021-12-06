import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NotificationManager } from 'react-notifications';
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Button from '../components/Navigation/Button'
import MessageSection from '../components/Section/MessageSection'
import { sendMessages } from '../reducers/form'
import './SendMessage.css'

// const test_form = {
//     email: "test_mail@gmail.com",
//     message: "This is a test message",
//     name: "test_user1",
//     myMioFa: {
//         frames: [
//             "https://cdn.discordapp.com/attachments/551602365162061834/914877887633571840/1.png",
//             "https://cdn.discordapp.com/attachments/551602365162061834/914877886996049940/2.png",
//         ],
//     }
// }

const form = {
    email: undefined,
    message: undefined,
    name: undefined,
    myMioFa: {
        frames: [],
    }
}

class SendMessage extends Component {
    state = {
        form,
        // form: test_form,
    }

    renderPreviewMessageSection = () => {
        const { form: { message, name, myMioFa } } = this.state
        return (
            <MessageSection message={message} name={name} isPreview={true} frames={myMioFa.frames} />
        )
    }

    handleChange = ({ target: { name, value } }) => {
        let { form } = this.state;
        const result = this.updateValue(form, name, value)
        this.setState({
            form: { ...result }
        });
    }

    updateValue = (parent, name, value) => {
        const splits = name.split(".", 2);
        if (splits.length > 1) {
            return { ...parent, [splits[0]]: this.updateValue(parent[splits[0]], splits[1], value) }
        }
        return { ...parent, [splits[0]]: value }
    }

    resetForm = () => {
        this.setState({
            form: {
                ...form,
                myMioFa: {
                    frames: [],
                }
            }
        })
    }

    validateData = (email, name, message) => {
        const missingFields = []
        if (!email || email.trim().length === 0) {
            missingFields.push("Email")
        }
        if (!name || name.trim().length === 0) {
            missingFields.push("Name")
        }
        if (!message || message.trim().length === 0) {
            missingFields.push("Message")
        }
        if (missingFields.length > 0) {
            NotificationManager.warning("Missing fields: " + missingFields.join(", "))
            return false
        }
        return true
    }

    submitForm = () => {
        const { sendMessages } = this.props;
        const { form: { email, name, message, myMioFa } } = this.state;
        if (this.validateData(email, name, message)) {
            sendMessages({ email, name, message, frames: myMioFa.frames });
            this.resetForm();
        }
    }

    render() {
        const { form: { email, message, name, myMioFa } } = this.state;
        return (
            <div className="send-message-container">
                <div className="mimic pagination-controller" />
                <div className="preview-container">
                    <span>Preview</span>
                    {this.renderPreviewMessageSection()}
                </div>
                <Form>
                    <Input type="text" title="Email" name="email" onChange={this.handleChange} value={email} placeholder="example@gmail.com" />
                    <Input type="text" title="Name" name="name" onChange={this.handleChange} value={name} placeholder="Name (20 characters max)" maxLength="20" />
                    <Input type="textarea" title="Message" name="message" onChange={this.handleChange} value={message} placeholder="Your messages for Mio. (200 characters max)" rows="8" maxLength="200" style={{ resize: "none" }} />
                    <Input type="multi" title="Your MioFa" name="myMioFa.frames" value={myMioFa.frames} onChange={this.handleChange} placeholder="URL" limit={2} />
                    <input type="button" value="Submit" onClick={this.submitForm} />
                    <input type="reset" value="Reset" onClick={this.resetForm} />
                </Form>
                <Button link="/" text="To Stage" />
            </div>
        )
    }
}


const mapDispatchToProps = {
    sendMessages,
}

export default connect(null, mapDispatchToProps)(SendMessage)
