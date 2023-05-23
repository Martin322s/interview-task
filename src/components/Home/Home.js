import { useEffect, useState } from "react";
import { getCryptoCurrencies } from "../../services/api-calls";
import styles from "./styles/Home.module.css";
import { cryptoLogos } from "./Crypto Logos/logos";
import coin from "./images/coin.jpg";

const Home = () => {
    const [state, setState] = useState({
        currencies: [],
        date: ""
    });
    
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let formattedDate = day + '/' + month + '/' + year;

    useEffect(() => {
        setState(state => ({ ...state, date: formattedDate }));
        getCryptoCurrencies()
            .then(data => {
                setState(state => ({
                    ...state,
                    currencies: Object.entries(data)
                        .map(x => ({
                            name: x[0],
                            price: x[1].USD,
                            logo: cryptoLogos[x[0]]
                        }))
                }));
            });
    }, [formattedDate]);

    return (
        <>
            <h2 className={styles["home-heading"]}>Prices up to date: {state.date}</h2>
            <section className={styles["home-section"]}>
                <img className={styles["home-image"]} src={coin} alt="coin" />
                <ul>
                    {state.currencies.map(x => {
                        return (
                            <li key={x.name}>
                                <div className={styles["item"]}>
                                    <img className={styles["logo-img"]} src={x.logo} alt={x.logo} />
                                    {x.name} --- {x.price}$ (USD)
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
};

export default Home;