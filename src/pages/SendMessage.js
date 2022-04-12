import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NotificationManager } from 'react-notifications'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Button from '../components/Navigation/Button'
import MessageSection from '../components/Section/MessageSection'
import { getFormStatus, sendMessages } from '../reducers/form'
import './SendMessage.css'
import MioFaAssets from '../assets/Miofa\ assets.rar'

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
        useCustomMioFa: false
    }

    renderPreviewMessageSection = () => {
        const { form: { message, name, myMioFa } } = this.state
        const isSubmitSuccess = this.isSubmitSuccess()
        return (
            <MessageSection message={isSubmitSuccess ? "Thank you!!!" : message} name={isSubmitSuccess ? "- The Mio-on Family -" : name} isPreview={true} frames={myMioFa.frames} />
        )
    }

    handleChange = ({ target: { name, value } }) => {
        let { form } = this.state
        const result = this.updateValue(form, name, value)
        this.setState({
            form: { ...result }
        });
    }

    updateValue = (parent, name, value) => {
        const splits = name.split(".", 2)
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
            },
            useCustomMioFa: false
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
        const { sendMessages } = this.props
        const { form: { email, name, message, myMioFa } } = this.state
        if (this.validateData(email, name, message)) {
            sendMessages({ email, name, message, frames: myMioFa.frames });
            this.resetForm()
        }
    }

    handleUseCustomMioFa = () => {
        const { useCustomMioFa } = this.state
        this.setState({
            useCustomMioFa: !useCustomMioFa,
        })
    }

    renderForm = () => {
        const { form: { email, message, name, myMioFa }, useCustomMioFa } = this.state
        return (
            <Form>
                <div className='notes'>
                    <p>- Email to identify the sender, won't be displayed on the website</p>
                    <p>- (*) fields are required</p>
                    <p>- You can only submit 1 message per day so please check everything carefully</p>
                </div>
                <Input type="text" title="Email(*)" name="email" onChange={this.handleChange} value={email} placeholder="mfa@mail.co (only 1 email/message)" />
                <Input type="text" title="Name(*)" name="name" onChange={this.handleChange} value={name} placeholder="- MioFa - (20 characters max)" maxLength="20" />
                <Input type="textarea" title="Message(*)" name="message" onChange={this.handleChange} value={message} placeholder="Your messages for Mio. (200 characters max)" rows="8" maxLength="200" style={{ resize: "none" }} />
                <Input type="checkbox" title="Customize Miochun" onChange={this.handleUseCustomMioFa} checked={useCustomMioFa} />
                {
                    useCustomMioFa ? [
                        <div className='notes'>
                            <p>- Sample MioFa assets <a key='miofaAssets' href={MioFaAssets}>HERE</a>.</p>
                            <p>- Upload your image to an online hosting service (or Twitter), and paste the image address to the URL fields below</p>
                        </div>,
                        <Input key='customMioFaFrames' type="multi" title="URLs" name="myMioFa.frames" value={myMioFa.frames} onChange={this.handleChange} placeholder="Frame" limit={2} />,
                    ]
                        : <div />
                }
                <div className='action-container'>
                    <input type="button" style={
                        {
                            margin: '5px',
                        }
                    } value="Submit" onClick={this.submitForm} />
                    <input type="reset" value="Reset" onClick={this.resetForm} />

                </div>
            </Form >
        )
    }

    renderSuccessForm = () => {
        return (
            <div className='success-form'>
                Thank you for the submission. We have received your message, and will review it shortly.
            </div>
        )
    }

    isSubmitSuccess = () => {
        const { submissionStatus } = this.props
        return submissionStatus === 201
    }

    render() {
        return (
            <div className="send-message-container">
                <div className="mimic pagination-controller" />
                <div className="preview-container">
                    <span>Preview</span>
                    {this.renderPreviewMessageSection()}
                </div>
                {this.isSubmitSuccess() ? this.renderSuccessForm() : this.renderForm()}
                <Button link="/" text="To Stage" />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    submissionStatus: getFormStatus(state)
})

const mapDispatchToProps = {
    sendMessages,
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)
