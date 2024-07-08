import axios from "axios";
import { 
    loginStart, 
    loginSuccess, 
    loginFailure 
} from "./userRedux";

import { 
    getProductStart, 
    getProductSuccess, 
    getProductFailure, 
    deleteProductStart, 
    deleteProductSuccess, 
    deleteProductFailure, 
    updateProductSuccess,
    updateProductStart,
    updateProductFailure,
    addProductSuccess,
    addProductStart,
    addProductFailure,
} from "./ProductRedux";
import { publicRequest, userRequest } from "../requestMethods";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5002/api/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await axios.get("http://localhost:5002/api/products")
        dispatch(getProductSuccess(res.data))
    } catch(err) {
        dispatch(getProductFailure())
    }
}
export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await axios.delete(`http://localhost:5002/api/products/${id}`, {token: `Bearer ${TOKEN}`})
        dispatch(deleteProductSuccess(res.data))
    } catch(err) {
        dispatch(deleteProductFailure())
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await axios.put(`http://localhost:5002/api/products/${id}`, product, {token: `Bearer ${TOKEN}`})
        dispatch(updateProductSuccess(res.data))
    } catch(err) {
        dispatch(updateProductFailure())
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await axios.post('http://localhost:5002/api/products', product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };