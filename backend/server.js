import Express from "express";

//express app
const app = Express();

//route handler
app.get('/', (req,res) => {
    res.json({mssg: 'Welcome to Flex-Core Stock Tracker!'})
})

//listen for requests
app.listen(4000, () => {
    console.log('Listening on Port 4000');
})