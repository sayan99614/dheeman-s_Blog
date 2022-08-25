import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/myimg.jpeg"
          width="300"
          height="300"
          alt="my image dheeman pati"
        />
      </div>
      <h1>Hi! I am Dheeman Pati</h1>
      <p>
        I blog about web development especially on frontend development
        frameworks like React, Vue etc.
      </p>
    </section>
  );
}

export default Hero;
