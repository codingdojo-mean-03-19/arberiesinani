const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const req = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

mongoose.Promise = global.Promise; 

mongoose.connect('mongodb://localhost/quotes');

mongoose.connection.on('connected', () => console.log("Mongo Connected"));

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
})