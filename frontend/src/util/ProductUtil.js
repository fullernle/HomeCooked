import axios from "axios";

export const fetchProduct = (productId) => {
  return axios.get(`/api/products/${productId}`);
};

export const fetchProducts = () => {
  return axios.get(`/api/products`);
};


export const filterProducts= (productIds, products) => {
    let productsArray = [];
    console.log(productIds);
    productIds.forEach((id) => {
      productsArray.push(products[id]);
    });

    return productsArray;
  }