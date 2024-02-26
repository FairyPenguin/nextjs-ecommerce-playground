import Image from "next/image";
import styles from "./Hero.module.css";
import HeroImage2 from "../../../public/images/DrawKit-Vector Illustration-Black Friday-Online Shopping.svg";
import ButtonWithLink from "../ButtonWithLink/ButtonWithLink";

export default function Hero() {
  return (
    <section className={styles["hero"]}>
      {/* Action Buttons Side  */}

      <div className={styles["hero__actions"]}>
        <div className={styles["heading__wrapper"]}>
          <h2 className={`${styles["first__half"]} ${styles["heading"]}`}>
            Your one stop shop <br />
            for
          </h2>

          <h2 className={`${styles["second__half"]} ${styles["heading"]}`}>
            electronics...
          </h2>
        </div>

        <p className={styles["description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          velit dignissimos architecto ad perferendis deleniti libero, eos esse
          vel.
        </p>

        <div className={styles["btns__wrapper"]}>
          {/* Button Component blue-medium-rounded */}
          <ButtonWithLink
            text={"Read More"}
            textUnderline={true}
            disabled={false}
            theme="button__blue"
            compound={"button__medium__rounded"}
            urlString="/about"
            className={`${styles["hero__blue__button"]}`}
          ></ButtonWithLink>

          {/* Button Component Purple-medium-rounded */}

          <ButtonWithLink
            text={"Offers!"}
            textUnderline={false}
            disabled={false}
            theme="button__purple"
            compound={"button__medium__rounded"}
            urlString="#"
          ></ButtonWithLink>
          {/* Button Component */}

          {/* <a className={`${styles["blue__btn"]}`} href="/about">
            <span>Read More</span>
          </a>

          <a className={`${styles["purple__btn"]}`} href="#">
            <span>Offers!</span>
          </a> */}
        </div>
      </div>

      {/* Featured Image Side*/}

      <div className={styles["hero__featured__img__wrapper"]}>
        <Image
          className={styles["hero__featured__img"]}
          alt="hero image"
          src={HeroImage2}
          width={914}
          height={914}
        />
      </div>
    </section>
  );
}
