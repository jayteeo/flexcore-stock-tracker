import coreModel from "../models/coreModel.js";

//get all cores
const getCores = async (req, res) => {
    
}


//get a single core



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
    createCore
};