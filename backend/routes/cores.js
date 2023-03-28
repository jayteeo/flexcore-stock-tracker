import express from 'express';
import {
    getCore,
    getCores,
     createCore, 
    } from '../controllers/coresController.js';

const router = express.Router();

//GET all cores
router.get('/', getCores);

//GET single core
router.get('/:id', getCore);

//POST a core
router.post('/', createCore);

//DELETE A core
router.get('/', (req, res) => {
    res.json({mssg: 'GET all cores'})
});

//UPDATE cores
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE cores'})
});

export {router as default};