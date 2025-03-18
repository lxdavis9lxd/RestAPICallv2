const express = require('express');
const router = express.Router();
const { callAnyRest } = require('../callanyrestv2');

router.post('/rest_api_process', async (req, res) => {
    const { url, method, body, authorization } = req.body;

    try {
        const response = await callAnyRest(url, method, body, authorization);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;