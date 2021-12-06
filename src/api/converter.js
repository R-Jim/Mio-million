const messageConverter = ({ content, author: { name, avatar } }) => {
    return {
        message: content,
        name,
        frames: avatar,
    }
}

const converter = { messageConverter }

export default converter
