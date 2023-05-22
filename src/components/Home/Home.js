import styles from "./styles/Home.module.css";
import coin from "./images/coin.jpg";
import { useEffect, useState } from "react";
import { getCryptoCurrencies } from "../../services/api-calls";
import { cryptoLogos } from "./Crypto Logos/logos";

const Home = () => {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        getCryptoCurrencies()
            .then(data => {
                setCurrencies(
                    Object.entries(data)
                        .map(x => ({
                            name: x[0],
                            price: x[1].USD,
                            logo: cryptoLogos[x[0]]
                        })));
            });
    }, []);
    console.log(currencies);
    return (
        <section className={styles["home-section"]}>
            <img className={styles["home-image"]} src={coin} alt="coin" />
            <ul>
                {currencies.map(x => {
                    return (
                        <li key={x.name}>
                            <div className={styles["item"]}>
                                <img className={styles["logo-img"]} src={x.logo} alt={x.logo} />
                                {x.name} --- price: {x.price}$
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Home;