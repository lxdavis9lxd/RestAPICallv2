const express = require('express');
const router = express.Router();
const { callAnyRest } = require('../Modules_users/callanyrestv2'); // Ensure this path is correct

router.get('restapiprocess', (req, res) => {
    console.log('GET request received');
    res.render('restapiprocess', { title: 'REST API Processx' });
});

router.post('restapiprocess', async (req, res) => {
    const { url, method, body, authorization } = req.body;

    try {
        const response = await callAnyRest(url, method, body, authorization);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
