import express from 'express';

const router = express.Router();

//GET all cores
router.get('/', (req, res) => {
    res.json({mssg: 'GET all cores'})
});

export {router as default};