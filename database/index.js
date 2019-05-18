const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/doggoInfo', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', () => console.log('doggoInfo database connection has failed.'));
db.once('open', () => console.log('doggoInfo database connection established.'));

module.exports = db;