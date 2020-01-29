const express = require('express');
const router = express.Router();

//handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'orders were fetched',
  });
});

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.price,
  };
  res.status(201).json({
    message: 'created order',
    order,
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Got individual order',
    orderId: req.params.orderId,
  });
});
router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'orders deleted',
    orderId: req.params.orderId,
  });
});

module.exports = router;
