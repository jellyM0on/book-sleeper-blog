const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const nodemailer = require('nodemailer'); 

const userRoutes = require('./routes/user')
const workRoutes = require('./routes/works')
const app = express();

require('dotenv/config'); 

app.use(express.json());
app.use(cors()); 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })


app.use(userRoutes)


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
    .sort({'date': -1 })
    .then((result, err) => {
        if(err){
            res.send(err)
        } else {
            res.send(result); 
        }
    })
})


const transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: 587,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

transporter.verify(function(err, success){
    if(err){
        console.log(err)
    } else {
        console.log('message server ready');
    }
})


app.post('/send', (req, res, next) => {
    let mail = {
        to: process.env.EMAIL, 
        from: `${req.body.email}`,
        text: `${req.body.name} ${req.body.message}`,
    }

    transporter.sendMail(mail, (err, data) => {
     if(err){
        res.json({
            status: 'fail',
        })
     } else {
        res.json({
            status: 'success',
        })
     }
    })
})

app.use(workRoutes)

app.listen(process.env.PORT, ()=> {
    console.log('server listening on 5000');
})

