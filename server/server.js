require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(() => {
    console.log('Server is running on PORT', PORT);
})