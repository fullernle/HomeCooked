import React from "react";
import styles from "./About.module.scss";
import fuller from "../../images/fuller_le.jpg";
import dennis from "../../images/dennis_yu.jpg";
import jonathan from "../../images/jonathon_yu.jpg";
import ibrahim from "../../images/ibrahim_ali.jpg";

function About() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.AboutWrapper}>
        <h1>About</h1>
        <p>
          Have you ever been in this situation? You want Pho, but with the love
          and care of a personal cook. You can't go to just any restaurant to
          get that, but you don't have someone you know that can create it
          either. You know what you do have? HomeCooked. The home food delivery
          service created for home cooks. Not only are you supporting your local
          community, but you're getting a great experience as well. It is a play
          on popular food delivery services, but for home cooks!
        </p>

        <h2>The Team</h2>
        <div className={styles.Team}>
          <div className={styles.Member}>
            <img src={fuller} alt="Fuller Le Image" />
            <h3>Fuller Le</h3>
            <a href="https://github.com/fullernle" target="_blank">
              Github
            </a>
            <a href="https://www.linkedin.com/in/fullernle/" target="_blank">
              LinkedIn
            </a>
          </div>

          <div className={styles.Member}>
            <img src={dennis} alt="Dennis Yu Image" />
            <h3>Denni Yu</h3>
            <a href="https://github.com/dennis-25" target="_blank">
              Github
            </a>
            <a href="https://www.linkedin.com/in/dennis-yu/" target="_blank">
              LinkedIn
            </a>
          </div>

          <div className={styles.Member}>
            <img src={jonathan} alt="Jonathan Yu Image" />
            <h3>Jonathan Yu</h3>
            <a href="https://github.com/JonYu87" target="_blank">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-yu-352b02186/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>

          <div className={styles.Member}>
            <img src={ibrahim} alt="Ibrahim Ali Image" />
            <h3>Ibrahim Ali</h3>
            <a href="https://github.com/ElephantTalk" target="_blank">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-a-998a39171/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
