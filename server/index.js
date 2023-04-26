const express = require('express');
const app = express();

app.get('/api', (req, res)=> {
    res.json({'msg':'hi'});
})

app.listen(5000, ()=> {
    console.log('server listening on 5000');
})