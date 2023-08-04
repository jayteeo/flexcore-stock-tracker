import express from 'express';
import {
        getCore,
        getCores,
        createCore, 
        deleteCore,
        updateCore,
        updateCoreStock,
    } from '../controllers/coresController.js';

const router = express.Router();

//GET all cores
router.get('/', getCores);

//GET single core
router.get('/:id', getCore);

//POST a core
router.post('/', createCore);

//DELETE A core
router.delete('/:id', deleteCore);

//UPDATE cores
router.patch('/:id', updateCore);

//CHANGE count
router.post('updateCoreStock', updateCoreStock);

export {router as default};