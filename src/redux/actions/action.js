import {
  getAllMenu,
  searchMenu,
  getAllCategory,
  authLogin,
  getAllTransaksi,
} from "../../utils/http";
import actionType from "./actionType";

export const getAllMenuCreator = () => {
  return {
    type: actionType.getAllMenu,
    payload: getAllMenu(),
  };
};

export const clearMenuCreator = () => {
  return {
    type: actionType.clearMenu,
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

export const checkedMenuCreator = (index) => {
  return {
    type: actionType.checkedMenu,
    payload: index,
  };
};

export const uncheckedMenuCreator = (index) => {
  return {
    type: actionType.unCheckedMenu,
    payload: index,
  };
};

export const getAllTransaksiCreator = () => {
  return {
    type: actionType.getAllTransaksi,
    payload: getAllTransaksi(),
  };
};

export const logoutCreator = () => {
  return {
    type: actionType.logout,
  };
};
