const globalState = {
  nama: "yusup",
  totalOrder: 6,
  menus: [],
};

const storeReducer = (state = globalState, action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      nama: "nendy",
    };
  }
  if (action.type === "CHANGE_MENUS") {
    return {
      ...state,
      menus: action.value,
    };
  }
  return state;
};

export default storeReducer;
