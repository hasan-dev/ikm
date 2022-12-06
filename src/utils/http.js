import axios from 'axios';

export const addProduct = data => {
  axios.post(
    'https://ikm-project-dabf5-default-rtdb.firebaseio.com/product.js',
    data,
  );
};
