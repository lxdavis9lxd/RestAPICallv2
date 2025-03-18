const axios = require('axios');

async function callRestApi(url, body, authorization, method) {
    try {
        const response = await axios({
            method: method,
            url: url,
            headers: {
                'Authorization': authorization,
                'Content-Type': 'application/json'
            },
            data: body
        });
        return response.data;
    } catch (error) {
        console.error('Error making API call:', error);
        throw error;
    }
}

module.exports = callRestApi;