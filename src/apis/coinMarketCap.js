import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
});