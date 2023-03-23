import express from 'express';

const router = express.Router();

//GET all cores
router.get('/', (req, res) => {
    res.json({mssg: 'GET all cores'})
});

//UPDATE cores
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE cores'})
});

export {router as default};