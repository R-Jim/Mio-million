import converter from "./converter";
import { NotificationManager } from 'react-notifications';

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
}).then(({ status }) => {
    if (status === 201) {
        NotificationManager.success('Message submitted. We will review it shortly.');
    } else if (status === 409) {
        NotificationManager.warning('There is already a message with the given author name or email');
    } else if (status === 429) {
        NotificationManager.warning('You already submitted a message. Please try again later');
    } else {
        NotificationManager.error('ERROR[' + status + '] Please contact vucuongJim@gmail.com or R Jim#1231');
    }
});

const api = { getMessage, sendMessage }

export default api
