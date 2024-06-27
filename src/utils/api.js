import sendHttpRequest from './sendHttpRequest';

export default class API {

    constructor({ baseUrl = process.env.EXPO_PUBLIC_API_URL }) {
        this.baseUrl = baseUrl;
    }

    get({ url }) {
        return sendHttpRequest({ url: `${this.baseUrl}${url}`, method: 'GET' });
    }

    post = ({ url, data }) => {
        return sendHttpRequest({ url: `${this.baseUrl}${url}`, method: 'POST', data });
    }

    put = ({ url, data }) => {
        return sendHttpRequest({ url: `${this.baseUrl}${url}`, method: 'PUT', data });
    }

    delete = ({ url }) => {
        return sendHttpRequest({ url: `${this.baseUrl}${url}`, method: 'DELETE' });
    }

}

