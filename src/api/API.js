import axios from 'axios';

const BASE_URI = 'https://api.coingecko.com/api/v3';

const API = axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-type": "application/json",
  }
});

export const getBtcPrice = async () => {
  return API.get('/simple/price?ids=bitcoin&vs_currencies=eur').then(res => res.data);
}

export const getBtcMarketChart = async () => {
  return API.get('/coins/bitcoin/market_chart?vs_currency=eur&days=1').then(res => res.data);
}
