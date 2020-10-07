const express = require('express');

let router = express.Router();

router.get('/', (requisicao, resposta) => {
  let products = [
    {
      id: '1',
      nome: 'Celular',
      tipo: 'Eletrônicos',
    },
    { id: 2, nome: 'Kebab', tipo: 'Comida' },
    {
      id: 3,
      nome: 'Carregador de celular',
      tipo: 'Eletrônicos',
    },
  ];
  if (requisicao.query.tipo) {
    products = products.filter((item) => item.tipo === requisicao.query.tipo);
  }

  if (requisicao.query.id) {
    products = products.filter((item) => item.id === requisicao.query.id);
  }

  resposta.status(200).json(products);
});
router.post('/', (req, res) => {
  console.log(req.body);
  return res
    .status(201)
    .json({ Message: 'Criado com sucesso', produtoCriado: req.body });
});

router.put('/:productId', (req, res) => {
  const productId = req.params.productId;

  return res.status(400).json({
    Message: `Erro ao atualizar produto ${productId}`,
    produtoCriado: req.body,
  });
});
module.exports = router;
