import express from 'express';
import Cores from '../models/Cores.js';

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
router.post('/', (req, res) => {
    const {size, count} = req.body;
    res.json({mssg: 'GET all cores'})
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