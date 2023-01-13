const knex = require('../database');

module.exports = {
    async index(req, res) {
    
    return res.sendFile(__dirname + "");
    }
}