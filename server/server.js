require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.listen(()=>{
    console.log('Server is running on PORT', PORT);
})