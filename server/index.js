const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const app = express();
require('dotenv/config'); 

app.use(express.json());
app.use(cors()); 

const TextModel = require('./models/text');

const url = process.env.DB_CONNECTION;

async function connectDb(){
    try{
        mongoose.connect(url); 
        console.log('connected')
    } catch (err){
        console.error(err); 
    }
}
connectDb(); 

app.get('/read', async (req, res) => {
    TextModel.find({})
    .sort({'date': 1, '_id': -1 })
    .then((result, err) => {
        if(err){
            res.send(err)
        } else {
            res.send(result); 
        }
    })
})

app.listen(5000, ()=> {
    console.log('server listening on 5000');
})