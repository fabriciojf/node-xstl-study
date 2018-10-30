/**
 * author Fabricio S Costa fabriciojf@gmail.com
 * since 2018-10-10
 * version 0.1a
 */

var xmlParse = require('xslt-processor').xmlParse;
var xsltProcess = require('xslt-processor').xsltProcess;
var js2xmlparser = require("js2xmlparser");
var userDao = require('../dao/user-dao');
var fs = require('fs');
var path = require('path');

// objects
var users = new userDao();

function CustomerController() { }
CustomerController.prototype = {

    showget: function (req, res) {

        var name = req.query.name;

        users.getAll(name, function (data) {
            var str = js2xmlparser.parse("users", data);
            var template = fs.readFileSync(path.join(__dirname, '../template') + '/usersget.tpl', 'utf8');

            const xml = xmlParse(str);
            const xslt = xmlParse(template);
            const outXmlString = xsltProcess(xml, xslt);

            res.setHeader('Content-Type', 'text/html');
            res.send(outXmlString.replace('[name]', name));
        })
    },

    showpost: function (req, res) {

        var name = req.body.name;

        users.getAll(name, function (data) {
            var str = js2xmlparser.parse("users", data);
            var template = fs.readFileSync(path.join(__dirname, '../template') + '/userspost.tpl', 'utf8');

            const xml = xmlParse(str);
            const xslt = xmlParse(template);
            const outXmlString = xsltProcess(xml, xslt);

            res.setHeader('Content-Type', 'text/html');
            res.send(outXmlString.replace('[name]', name));
        })
    }
};

module.exports = CustomerController;