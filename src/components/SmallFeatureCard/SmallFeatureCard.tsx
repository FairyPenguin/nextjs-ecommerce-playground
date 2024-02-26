import styles from "./SmallFeatureCard.module.css";

// Props Interface
interface Props {
  title: string;
  description: string;
  className: string;
  children: React.ReactNode;
}

export default function SmallFeatureCard({
  title,
  description,
  className,
  children,
}: Props) {
  return (
    <div className={`${styles["feature__card"]} ${styles[className]}`}>
      <div className={styles["feature__icon__wrapper"]}>
        {/* Svg Icon |or| Logo Image */}
        {children}
      </div>
      <div className={styles["wrapper"]}>
        <h3 className={styles["feature__title"]}>{title}</h3>
        <p className={styles["feature__description"]}>{description}</p>
      </div>
    </div>
  );
}
