import actionType from "../actions/actionType";

const initialState = {
  data: null,
  isAdmin: false,
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.authLogin + "_PENDING":
      return {
        ...state,
        isPending: true,
      };
    case actionType.authLogin + "_REJECTED":
      return {
        ...state,
        isRejected: true,
        data: payload,
        isPending: false,
      };
    case actionType.authLogin + "_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: payload.data.data,
        isRejected: false,
      };
    // case actionType.authLogin:
    //   return {
    //     ...state,
    //     token: payload,
    //     isAdmin: true,
    //     isLogin: true,
    //   };
    default:
      return state;
  }
};

export default auth;
