const express = require('express');
const bodyParser = require('body-parser');

const API = express();
API.use(express.static(__dirname + '/public'));

API.use(bodyParser.json());

API.listen(3000,() =>
{
    console.log("API is running");
})

API.post('/add',(req,res)=>
{
    console.log(req.body);
    res.send('it works');
})
