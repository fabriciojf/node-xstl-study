/**
 * author Fabricio S Costa fabriciojf@gmail.com
 * since 2018-10-10
 * version 0.1a
 */
var router = require('express').Router();

/**
 * Controllers
 */
var infoController = require('../controller/info-controller');
var xsltController = require('../controller/xslt-controller');

/**
 * Objetos
 */
var info = new infoController();
var xslt = new xsltController();

/**
 * routes
 * rotas de entrada para os controladores,
 * criar todos os metodos de resposta dentro dos 
 * controladores, mantendo neste arquivo apenas
 * os direcionamentos e a rota para raiz
 * do sistema
 */

/** 
* @api {..} .. 
* @APIGroup Rotas
* @ apiDescription rotas de entrada para os controladores,
   * criar todos os metodos de resposta dentro dos 
   * controladores, mantendo neste arquivo apenas
   * os direcionamentos e a rota para raiz
   * do sistema
* @apiParam {0.5} 99 descrição 
*/
router.get('/', info.getVersion);
router.get('/users', xslt.showget);
router.post('/users', xslt.showpost);

module.exports = router;