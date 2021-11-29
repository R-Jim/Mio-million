import converter from "./converter";

const API_URL = process.env.REACT_APP_API_URL ?? "";

const headers = {
    "X-API-Key": process.env.REACT_APP_API_Key ?? "",
}

const getMessage = ({ page, pageSize }) => fetch(API_URL + "messages?page=" + page + "&pageSize=" + pageSize, {
    headers
})
    .then(response => response.json())
    .then(
        ({ pageData, ...data }) =>
        ({
            ...data,
            pageData: pageData.map(message => converter.messageConverter(message))
        }));

const sendMessage = ({ name, email, frames, message }) => fetch(API_URL + "messages", {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "author": {
            name,
            email,
            "avatar": frames,
        },
        "content": message
    })
}).then();

export default { getMessage, sendMessage }
