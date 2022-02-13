// 1. У любого пользователя будет как минимум в БД category
// 2. Они равны mock данным
const Category = require("../models/Category");
const categoryMock = require("../mock/category.json");
// const Products = require("../models/Products");
// const productsMock = require("../mock/products.json");

module.exports = async () => {
  const category = await Category.find();
  if (category.length !== categoryMock.length) {
    await createInitialEntity(Category, categoryMock);
  }
};
// module.exports = async () => {
//   const products = await Products.find();
//   if (products.length !== productsMock.length) {
    // await createInitialEntity(Products, productsMock);
  // }
// };
async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
