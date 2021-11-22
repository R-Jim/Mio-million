import React, { Component } from 'react'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Button from '../components/Navigation/Button'
import MessageSection from '../components/Section/MessageSection'
import './SendMessage.css'

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

    render() {
        const { form: { email, message, name, myMioFa } } = this.state;
        return (
            <div className="send-message-container">
                <div className="mimic pagination-controller" />
                <div className="preview-container">
                    {this.renderPreviewMessageSection()}
                </div>
                <Form>
                    <Input type="text" title="Email" name="email" onChange={this.handleChange} value={email} placeholder="example@gmail.com" />
                    <Input type="text" title="Name" name="name" onChange={this.handleChange} value={name} placeholder="Name (10 characters max)" maxLength="10" />
                    <Input type="textarea" title="Message" name="message" onChange={this.handleChange} value={message} placeholder="Your messages for Mio. (100 characters max)" rows="4" maxLength="100" />
                    <Input type="multi" title="Your MioFa" name="myMioFa.frames" value={myMioFa.frames} onChange={this.handleChange} placeholder="URL" limit={2} />
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" onClick={this.resetForm} />
                </Form>
                <Button link="/" text="Back to main" />
            </div>
        )
    }
}

export default SendMessage
