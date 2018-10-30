/**
 * author Fabricio S Costa fabriciojf@gmail.com
 * since 2018-10-10
 * version 0.1a
 */

// default settings
var config = require('../config/default-config');

// imports
var pg = require('pg');

// connection prototype
function User() {
    this.pool = new pg.Pool(config.postgres.poolSettings);
}

User.prototype = {

    getAll: function (name, callback) {
        this.pool.connect(function (err, client, done) {

            client.query('SELECT name as username, email FROM users WHERE LOWER(name) LIKE $1 OR LOWER(email) LIKE $1 ORDER BY name LIMIT 50', ['%' + name + '%'], function (err, result) {

                done();
                if (err) {
                    console.log(err);
                    return callback({
                        success: false,
                        value: err
                    });
                }
                if (result.rows.length > 0) {
                    return callback({
                        user: result.rows
                    });
                } else {
                    return callback({
                        value: 'Sem itens'
                    });
                }
            });
        });
    },
};

module.exports = User;