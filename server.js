const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors');
const app = express();
const routes = require('./routes/studentRoutes')
const DB_URI = 'mongodb+srv://mflix:3Rkg4pkY7rprsDjE@cluster0.v3uapxa.mongodb.net/StudentDB';
mongoose.connect(DB_URI);
mongoose.connection.once('open', (err) => {
    if (!err) {
        console.log('Connected to MongoDB');
    }
});
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json());
app.use('/api/v1',routes)
const port = 8000 || process.env.PORT
app.listen(port, () => {
    console.log(`Server is running at port ${port} `);
});