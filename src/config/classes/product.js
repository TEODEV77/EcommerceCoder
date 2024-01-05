import productSchema from "../../dao/models/product.model.js";

export const create = async (product) => {
  const newProduct = await productSchema.create(product);
  return newProduct;
};

export const update = async (id, body) => {
  await productSchema.updateOne({ _id: id }, { $set: body });
};

export const remove = async (id) => {
  await productSchema.deleteOne({ _id: id });
};

export const getProducts = async (queryCriteria, options) => {
  const  product = await productSchema.paginate(queryCriteria, options);
  return product;
};
