import actionType from "../actions/actionType";

let initialState = {
  data: [],
  error: "",
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const menuReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case actionType.getAllMenu + "_PENDING":
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getAllMenu + "_REJECTED":
      return {
        ...prevState,
        isRejected: true,
        menus: payload,
        isPending: false,
      };
    case actionType.getAllMenu + "_FULFILLED":
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
      };
    case actionType.searchMenu + "_PENDING":
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.searchMenu + "_REJECTED":
      return {
        ...prevState,
        isRejected: true,
        menus: payload,
        isPending: false,
      };
    case actionType.searchMenu + "_FULFILLED":
      return {
        ...prevState,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
      };
    default:
      return prevState;
  }
};

export default menuReducer;
