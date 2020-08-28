import Axios from "axios";

export const getAllMenu = () => {
  const URI = process.env.REACT_APP_LINK_API;
  return Axios.get(URI);
};

export const getAllCategory = () => {
  const URI = `${process.env.REACT_APP_LINK_API}categorys`;
  return Axios.get(URI);
};

export const searchMenu = (name, by) => {
  const URI = `${process.env.REACT_APP_LINK_API}search?name=${name}&by=${by}`;
  return Axios.get(URI);
};
