const express = require("express");
const Products = require("../models/Products");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    try {
      const list = await Products.find();
      res.status(200).send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .post(async (req, res) => {
    try {
      const newProduct = await Products.create({
        ...req.body,
      });
      res.status(201).send(newProduct);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  router.delete('/:productId', async (req, res) => {
    try {
      const { productId } = req.params
      const removedProduct = await Products.findById(productId)
        await removedProduct.remove()
        return res.send("ok")
    } catch (e) {
      console.log(e.message);
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже'
      })
    }
  });
  router.patch("/:productId", async (req, res) => {
    try {
      const { productId } = req.params;
      const updatedProduct = await Products.findByIdAndUpdate(productId, req.body, {
        new: true,
      });
      res.send(updatedProduct);
      
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

module.exports = router;
