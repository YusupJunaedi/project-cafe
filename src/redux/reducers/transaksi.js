import actionType from "../actions/actionType";

let initialState = {
  data: [],
  error: "",
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const transaksiReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case actionType.getAllTransaksi + "_PENDING":
      return {
        ...prevState,
        isPending: true,
      };
    case actionType.getAllTransaksi + "_REJECTED":
      return {
        ...prevState,
        isRejected: true,
        menus: payload,
        isPending: false,
      };
    case actionType.getAllTransaksi + "_FULFILLED":
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

export default transaksiReducer;
