import { getAllMenu } from "../../utils/http";

export const getAllMenuCreator = () => {
  return {
    type: "GET_RANDOM_USER",
    payload: getAllMenu(),
  };
};
