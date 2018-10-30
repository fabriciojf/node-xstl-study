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
function Customer() {
    this.pool = new pg.Pool(config.postgres.poolSettings);
}

Customer.prototype = {

    getAll: function (callback) {

        this.pool.connect(function (err, client, done) {

            var sql = 'SELECT * FROM pessoas Limit 5';
            client.query(sql, function (err, result) {

                done();
                if (err) {
                    return callback({
                        success: false,
                        value: err
                    });
                }
                if (result.rows.length > 0) {
                    return callback({
                        success: true,
                        value: result.rows
                    });
                } else {
                    return callback({
                        success: false,
                        value: 'Sem itens'
                    });
                }
            });
        });
    },
};

module.exports = Customer;