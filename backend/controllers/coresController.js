import coreModel from "../models/coreModel.js";
import mongoose from "mongoose";

//get all cores
const getCores = async (req, res) => {
    const cores = await coreModel.find({}).sort({size: -1});

    res.status(200).json(cores);
}


//get a single core
const getCore = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such core exists!'});
    }

    const core = await coreModel.findById(id);

    if (!core) {
        return res.status(404).json({error: 'No core found.'});
    }

    res.status(200).json(core);
}

//create new core

const createCore = async (req, res) => {
    const {size, count} = req.body;

    //add document to db
    try {
      const core = await coreModel.create({size, count});  
      res.status(200).json(core);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a core



//update a core

export {
    getCore,
    getCores,
    createCore
};