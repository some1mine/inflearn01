if(process.env.NODE_ENV === 'production') {
    module.exports = require('./key');
} else {
    module.exports = require('./dev');
}