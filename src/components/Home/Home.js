import styles from "./styles/Home.module.css";
import coin from "./images/coin.jpg";

const Home = () => {
    return (
        <section className={styles["home-section"]}>
            <img className={styles["home-image"]} src={coin} alt="coin" />
        </section>
    );
};

export default Home;