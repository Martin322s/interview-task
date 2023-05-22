const baseUrl = "https://min-api.cryptocompare.com/data/pricemulti";
const api_key = "3a6c343e0f2ad26d4986f9fa291af2c1bd3da8b20e6bca5011b90e788eb3bec6";

export const getCryptoCurrencies = () =>
    fetch(`${baseUrl}?fsyms=BTC,ETH,LTC,XRP,BCH,XLM,ADA,DOGE&tsyms=USD&api_key=${api_key}`)
        .then(res => res.json());