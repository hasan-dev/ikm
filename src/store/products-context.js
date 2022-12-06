import {createContext, useReducer} from 'react';

export const ProductsContext = createContext({
  products: [],
  addProduct: ({nama, harga, stok, deskripsi}) => {},
  setProduct: products => {},
  deleteProduct: id => {},
  updateProduct: (id, {nama, harga, stok, deskripsi}) => {},
});

const productsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const updatableProductIndex = state.findIndex(
        product => product.id === action.payload.id,
      );

      const updatableProduct = state[updatableProductIndex];
      const updatedItem = {...updatableProduct, ...action.payload.data};
      const updatedProduct = [...state];
      updatedProduct[updatableProductIndex] = updatedItem;
      return updatedProduct;
    case 'DELETE':
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};

const productsContextProvider = ({children}) => {
  const [productsState, dispatch] = useReducer(productsContextProvider, []);

  const addProduct = (product) => {
    dispatch({type: 'ADD', payload: product})
  }

  const setProducts = (product) => {
    dispatch({type: 'SET', payload: product})
  }

  const deleteProduct = (product) => {
    dispatch({type: 'DELETE', payload: id})
  }

  const updateProduct = (id, product) => {
    dispatch({type: 'UPDATETEXT', payload: {id: id, data: product}})
  }

  const value = {
    products: productsState,
    set
  }

  return ()
};

export default productsContextProvider;
