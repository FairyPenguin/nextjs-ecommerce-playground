import styles from "./Footer.module.css";
// Components Imports
import FooterList from "./components/FooterList/FooterList";
import FooterListItem from "./components/FooterListItem/FooterListItem";
import yearDate from "../../../../utilites/DateYearUpdater";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["top__footer__container"]}>
        <div className={styles["footer__about footer__list"]}>
          <h4 className={styles["footer__list__titler"]}></h4>
          <p className={styles["short__about"]}>
            X-tech Company was established in 2020, and since then we have been
            working on selecting high quality, guaranteed and approved products,
            providing them to the customer at competitive prices and providing
            after-sales services to achieve the highest levels of satisfaction
            for our customers.
          </p>
        </div>

        <FooterList title="About Us">
          <>
            <FooterListItem title="Our Stores" url="/products" />
            <FooterListItem title="Careers" url="/products" />
            <FooterListItem title="" url="/products" />
            <FooterListItem title="Terms & Conditions" url="/products" />
            <FooterListItem title="Privacy Policy" url="/products" />
          </>
        </FooterList>

        <FooterList title="Customer Care">
          <>
            <FooterListItem title="Help Center" url="/products" />
            <FooterListItem title="Track Your Order" url="/products" />
            <FooterListItem title="Return & Refunds" url="/products" />
            <FooterListItem title="" url="/products" />
            <FooterListItem title="Link" url="/products" />
          </>
        </FooterList>

        <FooterList title="Contact Us">
          <>
            <FooterListItem
              title="Address: 70 Smouha Square, Alexandria, Egypt"
              url="/products"
            />
            <FooterListItem title="Address2: Cairo, Egypt" url="/products" />
            <FooterListItem
              title="Email: xtech.help@gmail.com"
              url="/products"
            />
            <FooterListItem title="Phone: +1 1123 456 780" url="/products" />
            <FooterListItem title="WhatsApp: +1 1123 456 780" url="/products" />
          </>
        </FooterList>
      </div>

      <div className={styles["bottom__footer"]}>
        <div className={styles["bottom__footer__wrapper"]}>
          <p className={styles["copyright"]}>
            X-tech<span> &copy;</span>
            {yearDate} All Rights Reserved. Designed by ApexNile
          </p>
          <div className={styles["social__icons"]}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
