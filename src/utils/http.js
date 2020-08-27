import Axios from 'axios';

export const getAllMenu = () => {
    const URI = process.env.REACT_APP_LINK_API;
    return Axios.get(URI);
  };