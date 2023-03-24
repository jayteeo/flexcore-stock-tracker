import express from 'express';
import coreModel from '../models/coreModel.js';

const router = express.Router();

//GET all cores
router.get('/', (req, res) => {
    res.json({mssg: 'GET all cores'})
});

//GET single core
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET all cores'})
});

//POST a core
router.post('/', async (req, res) => {
    const {size, count} = req.body;

    try {
      const core = await coreModel.create({size, count});  
      res.status(200).json(core);
    } catch (error) {
        res.status(400).json({error: error.message})
    }

});

//DELETE A core
router.get('/', (req, res) => {
    res.json({mssg: 'GET all cores'})
});

//UPDATE cores
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE cores'})
});

export {router as default};