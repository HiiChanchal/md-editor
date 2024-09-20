const express = require('express');
const app = express();
const port = process.env.port || 3001

app.use(express.json());

app.listen(port, () => {
    console.log(`running on ${port} port`);
})