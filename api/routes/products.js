const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Product = require('../models/product');

router.get('/', (req, res, next) => {
  Product.find()
    .exec()
    .then(results => {
      //if (!!results.length) {
      console.log(results);
      res.status(200).json(results);
      //}
      // else {
      //   res.status(404).json({
      //     message: 'No Entries found',
      //   });
      // }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error });
    });
});

router.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: +req.body.price,
  });

  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'handling POST to /products',
        createdProduct: result,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then(doc => {
      if (!doc) {
        res
          .status(404)
          .json({ message: 'No valid entry found for provided ID' });
      } else {
        console.log('From Database', doc);
        res.status(200).json(doc);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId;

  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  console.log(updateOps);

  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(results => {
      console.log(results);
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(results => {
      console.log(results);
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
