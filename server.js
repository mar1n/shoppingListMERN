require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');

const items = require('./routes/api/items')
const app = express()

app.use(bodyParser.json())


const db = process.env.DB_URL_PRD

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo connected...'))
    .catch(error => console.log(error))

app.use('/api/items', items)

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))