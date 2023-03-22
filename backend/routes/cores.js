import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET all cores'})
});

export {router as default};