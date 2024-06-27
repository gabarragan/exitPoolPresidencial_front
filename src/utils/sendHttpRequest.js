const sendHttpRequest = async ({ method, url, data }) => {
    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: data ? { 'Content-Type': 'application/json' } : {}
        });

        if (response.status >= 400) {
            const errResData = await response.json();
            const error = new Error('Something went wrong!');
            error.data = errResData;
            throw error;
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};


export default sendHttpRequest;