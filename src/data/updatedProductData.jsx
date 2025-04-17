import rawProducts from "./productdata"; // your original data

const updatedProductsAndCategory = {};

Object.entries(rawProducts).forEach(([category, products]) => {
  updatedProductsAndCategory[category] = products.map((product, index) => ({
    ...product,
    id: index,
    category, // attach category name inside each product
  }));
});

export default updatedProductsAndCategory;
