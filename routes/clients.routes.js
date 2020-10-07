const express = require('express');

let router = express.Router();
router.get('/list', (requisicao, resposta) => {
  resposta.send('Listando clientes');
});

module.exports = router;
