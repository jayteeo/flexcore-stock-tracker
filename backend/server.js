import * as dotenv from 'dotenv';
dotenv.config();

import Express from "express";
import coresRoutes from './routes/cores.js'

//express app
const app = Express();

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();

})

//routes
app.use('/api/cores', coresRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT);
})