require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routesIndex = require('./routes/index.router');

var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routesIndex);

//error handler
app.use((err, req, res, next) => {
    if (err.name == 'ValidationError') {
        // ValidationError means it can be required, minlength validation etc
        var validationErrors = [];
        Object.keys(err.errors).forEach(key => validationErrors.push(err.errors[key].message));
        res.status(422).send(validationErrors);
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));
