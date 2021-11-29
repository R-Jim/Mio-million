const messageConverter = ({ content, author: { name, avatar } }) => {
    return {
        message: content,
        name,
        frames: avatar,
    }
}

export default { messageConverter }
