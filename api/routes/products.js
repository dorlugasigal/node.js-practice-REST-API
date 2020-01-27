const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling GET to /products',
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling POST to /products',
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;

  if (id === 'special') {
    res.status(200).json({
      message: 'you discovered special',
      id,
    });
  } else {
    res.status(200).json({
      message: 'you passed an ID',
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: 'updated product',
  });
});

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: 'delete product',
  });
});

module.exports = router;
