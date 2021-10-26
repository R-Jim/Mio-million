import LayoutBuilder from './LayoutBuilder'
import messages from '../../configs/messages'

export class MessageLayoutBuilder extends LayoutBuilder {
    state = {
        messages: messages
    }

    getMessage = () => {
        const { messages } = this.state;
        const item = messages.pop();
        // this.setState({
        //     messages
        // })
        return item;
    }

    getAdditionProperties = () => {
        const { message, name } = this.getMessage() ?? {};
        return { props: { message, name } }
    }
}

export default MessageLayoutBuilder
