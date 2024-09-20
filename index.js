const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5001
const mdeditorPath = require('./routes/md.html.route')
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/text/path',mdeditorPath)

app.listen(port, () => {
    console.log(`running on ${port} port`);
})