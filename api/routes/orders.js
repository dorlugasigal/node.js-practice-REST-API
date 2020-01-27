const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'orders were fetched',
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'created order',
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
