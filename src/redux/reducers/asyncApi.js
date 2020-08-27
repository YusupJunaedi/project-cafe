let initialState = {
  menus: [],
  error: "",
  isPending: false, //dimanfaatkan untuk membuat loading component
  isFulfilled: false, //dimanfaatkan untuk membuat success component
  isRejected: false, //dimanfaatkan untuk membuat error component
};

const asyncApiReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_MENU_PENDING":
      return {
        ...prevState,
        isPending: true,
      };
    case "GET_ALL_MENU_REJECTED":
      return {
        ...prevState,
        isRejected: true,
        menus: payload,
        isPending: false,
      };
    case "GET_ALL_MENU_FULLFILLED":
      return {
        ...prevState,
        isFulfilled: true,
        menus: payload,
        isRejected: false,
      };

    default:
      return prevState;
  }
};

export default asyncApiReducer;
