import coreModel from "../models/coreModel.js";
import mongoose from "mongoose";
import * as coreService from "../services/coreService.js";
//get all cores
const getCores = async (req, res) => {
    const cores = await coreModel.find({}).sort({size: 1});

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

    let emptyFields = [];

    if (!size) {
        emptyFields.push('size')
    }
    if (!count) {
        emptyFields.push('count')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all empty fields!', emptyFields })
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all empty fields!', emptyFields })
    }
    

    //add document to db
    try {
      const core = await coreModel.create({size, count});  
      res.status(200).json(core);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a core
const deleteCore = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such core exists!'});
    }

    const core = await coreModel.findOneAndDelete({_id: id});

    if (!core) {
        return res.status(400).json({error: 'No such core exists!'});
    }

    res.status(200).json(core);
}


//update a core
const updateCore = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such core exists!'});
    }

    const core = await coreModel.findOneAndUpdate({_id: id}, {
       ...req.body
    })
    

    if (!core) {
        return res.status(400).json({error: 'No such core exists!'});
    }

    res.status(200).json(core);
}

const updateCoreAsync = async (req, res) => {
    const coreId = req.params;

    /* from your front end you would pass an object called updateCoreStockPayload
    // {
        updateCoreStockPayload: {
                count: 89
            }
        }
    */
    const coreCount = req.body.updateCoreStockPayload.count;

    const result = await coreService.updateCoreStock(coreId, coreCount);

    if (result.success == true){
        req.status(200).json({message: "Success"});
    }
    else{
        req.status(500).json({message: result.message});
    }
}

//ADDING or SUBTRACTING core count

const updateCoreStock = async (req,res) => {
    
    let {size, action, count} = req.body;
    // let { id } = req.params;
    let emptyFields = [];

    console.log(size);

    if (!count) {
        emptyFields.push('count')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all empty fields!', emptyFields })
    }



    if (action == 'Subtract') {
        count = -Math.abs(count);
    }

    try {
        // const core = await coreModel.findOneAndUpdate({ size: size},
        //     {'$inc': {'count': count}},
        //     res.status(200).json(size))

        const core = await coreModel.findOneAndUpdate({ size: size}, {'$inc': {'count': count}}, {new: true})
            res.status(200).json(size)
        
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

export {
    getCore,
    getCores,
    createCore,
    deleteCore,
    updateCore,
    updateCoreStock,
};