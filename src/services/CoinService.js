import axios from "axios";


export const getCoins = () => axios.get("https://api.coincap.io/v2/assets");

export const getCoin = (id) => axios.get(`https://api.coincap.io/v2/assets/${id}`);