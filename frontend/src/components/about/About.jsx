import React from "react";
import styles from "./About.module.scss";
import fuller from "../../images/fuller_le.jpg";
import dennis from "../../images/dennis_yu.jpg";
import jonathan from "../../images/jonathon_yu.jpg";

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

        <h2>Meet our Team</h2>
        <div className={styles.Team}>
          <div className={styles.Member}>
            <img src={fuller} alt="Fuller Le Image" />
            <h3>Fuller Le</h3>
            <a href="https://github.com/fullernle">Github</a>
            <a href="">LinkedIn</a>
          </div>

          <div className={styles.Member}>
            <img src={dennis} alt="Dennis Yu Image" />
            <h3>Denni Yu</h3>
            <a href="https://github.com/dennis-25">Github</a>
            <a href="">LinkedIn</a>
          </div>

          <div className={styles.Member}>
            <img src={jonathan} alt="" />
            <h3>Jonathan Yu</h3>
            <a href="https://github.com/JonYu87">Github</a>
            <a href="">LinkedIn</a>
          </div>

          <div className={styles.Member}>
            <img src="" alt="" />
            <h3>Ibrahim Ali</h3>
            <a href="https://github.com/ElephantTalk">Github</a>
            <a href="">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
