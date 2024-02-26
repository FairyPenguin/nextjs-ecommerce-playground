import styles from "./FeatureCard.module.css";

//Props
interface Props {
  title: string;
  description: string;
  className: string;
  children: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  className,
  children,
}: Props) {
  return (
    <div className={`${styles["feature__card"]} ${styles[className]}`}>
      <div className={styles["feature__icon__wrapper"]}>
        {/* Svg Icon */}
        {children}
      </div>
      <h3 className={styles["feature__title"]}>{title}</h3>
      <p className={styles["feature__description"]}>{description}</p>
    </div>
  );
}
