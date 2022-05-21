const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const itemRouter = require('./routes/items')
const app = express();
app.use(cors());
app.use(express.json());
const uri = process.env.DB_URI



mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongodb: connected')
})

app.use('/items', itemRouter)

const port = process.env.PORT || 3001
app.listen(port, () => console.log('server listening on port ' + port))


