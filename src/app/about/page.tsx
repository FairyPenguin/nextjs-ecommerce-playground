import styles from "./about.module.css";
import Image from "next/image";

// Componenets Imports
import MainLayout from "@/components/UiComponents/MainLayout/MainLayout";
import ChatIconSvg from "@/components/SvgIcons/ChatIconSvg";
import ShippingIconSvg from "@/components/SvgIcons/ShippingIconSvg";
import UserIconSvg from "@/components/SvgIcons/UserIconSvg";
import Features from "@/components/Features/Features";
import FeatureCard from "@/components/FeatureCard/FeatureCard";

function about() {
  return (
    <MainLayout>
      <section className={styles["hero"]}>
        <div className={styles["hero__intro"]}>
          <h2 className={styles["section__title"]}>About us</h2>
          <p>
            At X-tech E-commerce, we are dedicated to providing our customers
            with the best possible shopping experience. We believe that shopping
            should be easy, convenient, and enjoyable, and we strive to make
            that a reality for everyone who visits our site.
          </p>
        </div>

        <div className="hero__image__wrapper">
          <Image
            className={styles["hero__image"]}
            src={"/images/pexels-maddy-freddie-4602445.jpg"}
            width={1280}
            height={1024}
            alt="shop"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* Features Cards */}
      <Features
        title="What we have to offer"
        description="Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible to get a pure thought out."
      >
        <FeatureCard
          title="Express shipping"
          description="The time is now for it to be okay to be great. People in this world shun people for being great."
          className="white__background"
        >
          <ShippingIconSvg width={30} height={30} />
        </FeatureCard>

        <FeatureCard
          title="Free exchanges"
          description="The time is now for it to be okay to be great. People in this world shun people for being great."
          className="white__background"
        >
          <UserIconSvg width={30} height={30} />
        </FeatureCard>
        <FeatureCard
          title="Extended warranty"
          description="The time is now for it to be okay to be great. People in this world shun people for being great."
          className="white__background"
        >
          <ChatIconSvg width={30} height={30} />
        </FeatureCard>
      </Features>
    </MainLayout>
  );
}

export default about;
