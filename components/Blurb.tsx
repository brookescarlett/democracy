import { Text, Card } from "@geist-ui/react";
import Dropdown from "./Dropdown";
import { Issues } from "../utils/types";
import { data } from "../utils/data";
import styles from "../styles/Demo.module.css";

const emojiTable: Record<Issues, string> = {
  [Issues.Coronavirus]: "🤒",
  [Issues.CriminalJustice]: "⛓️",
  [Issues.Economy]: "💸",
  [Issues.Education]: "🎓",
  [Issues.Environment]: "🌲",
  [Issues.GunRights]: "🔫",
  [Issues.GayRights]: "🏳️‍🌈",
  [Issues.HealthCare]: "🏥",
  [Issues.Immigration]: "🛂",
  [Issues.RacialEquality]: "✊🏿",
  [Issues.WomensRights]: "👑",
};

const getNormalizedIssue = (string) => {
  if (!string) return null;

  return string
    .match(/^[a-z]+|[A-Z][a-z]*/g)
    .map(function (x) {
      return x[0].toUpperCase() + x.substr(1).toLowerCase();
    })
    .join(" ");
};

let prev: number;

const getNum = () => Math.floor(Math.random() * 5);

const getDisplayColor = () => {
  const arr = [
    styles.violet,
    styles.alert,
    styles.cyan,
    styles.purple,
    styles.warning,
  ];
  let num = getNum();

  while (num === prev) {
    num = getNum();
  }

  prev = num;
  return arr[num];
};

function Blurb({ issue, setIssue }) {
  const welcomeText = (
    <div className={styles.welcome}>
      <Text type="secondary">
        {" "}
        Welcome to{" "}
        <Text b className={styles.cyan}>
          know the facts
        </Text>{" "}
        <span>👋</span>, we're here to help you phone bank without fear (
        <Text b>read:</Text> feel a little more prepared to have conversations
        with voters). We've synthesized information about Biden's platform (
        <Text b>pro-tip:</Text>it's awesome) and Trump's mishandling of
        everything from climate change to coronavirus. To get started, select an
        issue from the dropdown below.
      </Text>
      <Text small b className={styles.violet}>
        P.S. we're new in town, so let us know how we can improve this site to
        help you phone bank your best!
      </Text>
    </div>
  );

  const issueText = (
    <>
      <Text p>
        Know the facts:{" "}
        <span className={styles.head}>
          <Text b className={getDisplayColor()}>
            {getNormalizedIssue(issue)}
            <span className={styles.emoji}>{emojiTable[issue]}</span>
          </Text>
        </span>
      </Text>
      <Text small type="secondary" className={styles.description}>
        {data[issue]?.summary}{" "}
        <Text small type="secondary" className={styles.description}>
          <a href={data[issue]?.href} target="_blank" rel="noopener noreferrer">
            Learn more.
          </a>
        </Text>
      </Text>
    </>
  );

  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.card}>
          {issue ? issueText : welcomeText}
          <Dropdown selectHandler={(issue) => setIssue(issue)} />
        </div>
      </Card>
    </div>
  );
}

export default Blurb;
