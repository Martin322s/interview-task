const cryptoCurrencies = ["BTC", "ETH", "LTC", "XRP", "BCH", "XLM", "ADA"];
const api_key = "3a6c343e0f2ad26d4986f9fa291af2c1bd3da8b20e6bca5011b90e788eb3bec6";
const url = `
    https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoCurrencies.join(',')}
    &tsyms=USD&api_key=${api_key}`;

export const getCryptoCurrencies = () => {
    return fetch(url)
        .then(res => res.json());
};