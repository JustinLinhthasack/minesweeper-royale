const express = require('express');
const path = require('node:path');
const app = express();
const port = 8080;


app.use('/images', express.static(path.join(__dirname, 'assets/images')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'assets/html/index.html'))
});

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
});