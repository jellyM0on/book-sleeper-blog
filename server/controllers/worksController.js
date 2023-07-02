const Works = require('../models/text');
const mongoose = require('mongoose'); 

const getWorks = async(req, res) => {
    const works = await Works.find({}).sort({createdAt: -1})
    res.status(200).json(works)
}

const getWork = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'does not exist'})
    }
    const work = await Works.findById(id); 
    if(!work) return res.status(400).json({error: 'does not exist'})
    res.status(200).json(work)
}

const addWork = async(req, res) => {
    const {title, content, date} = req.body
    if(!title || !content || !date){
        return res.status(400).json({error: 'All fields must be filled'})
    }

    try{
        const work = await Works.create({title, content, date}); 
        res.status(200).json(work); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const editWork = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'does not exist'})
    }

    const work = await Works.findOneAndUpdate({_id: id}, {...req.body})

    if (!work) return res.status(400).json({error: 'does not exist'})

    res.status(200).json(work)
}

const deleteWork = async(req, res) => {
    const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error: 'does not exist'})
        }

        const work = await Works.findOneAndDelete({_id: id})

        if (!work) return res.status(400).json({error: 'does not exist'})
        
        res.status(200).json(work)
}



module.exports = {getWork, addWork, deleteWork, editWork}