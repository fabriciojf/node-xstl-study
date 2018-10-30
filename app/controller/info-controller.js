/**
 * author Fabricio S Costa fabriciojf@gmail.com
 * since 2018-10-10
 * version 0.1a
 */

var config = require('../config/default-config');

function InfoController() { }
InfoController.prototype = {
    getTelecom: function (req, res) {
        res.json({
            result: 'Success',
            description: 'Telecom'
        });
    },
    getStatus: function (req, res) {
        res.json({
            result: 'Success',
            description: 'System Running'
        });
    },
    getVersion: function (req, res) {
        res.json({
            status: true,
            result: 'Success / Conectado',
            description: 'System Running / Sistema em Execução - Factor Base 55 Milhões de registros',
            version: config.version.dist
        });
    }
};
module.exports = InfoController;