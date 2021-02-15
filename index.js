const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

const books = ['And then there was none','Murder of Roger Ackroyd','Dumb Witness','Master of the Game','Lalle Kathegalu']

app.get('/',(req,res)=>{
    res.status(200).json({
        books
    })
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})