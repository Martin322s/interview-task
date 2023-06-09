import Home from "./components/Home/Home";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <h1 className={styles["main-heading"]}>
                The 8 of the most popular cryptocurrencies
                <i className="fas fa-coins"></i>
            </h1>
            <Home />
            <Footer />
        </>
    );
}

export default App;