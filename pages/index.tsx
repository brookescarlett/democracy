import ReactGA from "react-ga";
import Main from "../components/Main";
import styles from "../styles/Demo.module.css";

export default function Home() {
  ReactGA.initialize("UA-179116227-1");

  return (
    <div className={styles.main}>
      <Main />
      <div className={styles.footer}>
        <span>
          Grab him by the ballot box! Vote blue no matter who! 42 days left!
          Brooke loves you! Battle for the soul of the nation! Grab him by the
          ballot box! Science is real! Black lives matter! No human is illegal!
          Love is love! Women's rights are human rights! Kindness is everything!
        </span>
      </div>
    </div>
  );
}
