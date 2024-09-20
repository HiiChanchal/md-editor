const express = require('express');
const app = express();
const port = process.env.port || 3001
const mdeditorPath = require('./routes/md.html.route')

app.use(express.json());

app.use('/text/path',mdeditorPath)

app.listen(port, () => {
    console.log(`running on ${port} port`);
})