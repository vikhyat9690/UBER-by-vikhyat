const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Heylo there');
})

module.exports = app;