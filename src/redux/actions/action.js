import {
  getAllMenu,
  searchMenu,
  getAllCategory,
  authLogin,
} from "../../utils/http";
import actionType from "./actionType";

export const getAllMenuCreator = () => {
  return {
    type: actionType.getAllMenu,
    payload: getAllMenu(),
  };
};

export const searchMenuCreator = (name, by) => {
  return {
    type: actionType.getAllMenu,
    payload: searchMenu(name, by),
  };
};

export const getAllCategoryCreator = () => {
  return {
    type: actionType.getAllCategory,
    payload: getAllCategory(),
  };
};

export const addToCartCreator = (data) => {
  return {
    type: actionType.addToCart,
    payload: data,
  };
};

export const deleteCartCreator = (data) => {
  return {
    type: actionType.deleteCart,
    payload: data,
  };
};

export const deleteALLCartCreator = () => {
  return {
    type: actionType.deleteAllCart,
  };
};

export const updateInvoiceCreator = () => {
  return {
    type: actionType.updateInvoice,
  };
};

export const plusQtyCreator = (index) => {
  return {
    type: actionType.plusQty,
    payload: index,
  };
};

export const minusQtyCreator = (index) => {
  return {
    type: actionType.minusQty,
    payload: index,
  };
};

export const authLoginCreator = (name, password) => {
  return {
    type: actionType.authLogin,
    payload: authLogin(name, password),
  };
};
