import ReactGA from "react-ga";
import Main from "../components/Main";

import styles from "../styles/Demo.module.css";

export default function Home() {
  ReactGA.initialize(process.env.gaKey);

  // Object.values(Issues).map((issue) => {
  //   const parseIssue = issue
  //     .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
  //     .toLowerCase();
  //   ReactGA.pageview(`/issue/${parseIssue}`);
  // });

  return (
    <div className={styles.main}>
      <Main />
      <div className={styles.footer}>
        <span>
          Were you also disgusted by that debate? Great! You're in the right
          place. Grab him by the ballot box! Vote blue no matter who! Brooke
          loves you! Battle for the soul of the nation! Grab him by the ballot
          box! Science is real! Black lives matter! No human is illegal! Love is
          love! Women's rights are human rights! Kindness is everything!
        </span>
      </div>
    </div>
  );
}
