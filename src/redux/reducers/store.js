const globalState = {
  menus: [],
  carts: [],
  categorys: [],
};

const rootReducer = (state = globalState, action) => {
  if (action.type === "GET_ALL_MENU") {
    return {
      ...state,
      menus: action.value,
    };
  }
};

export default rootReducer;
