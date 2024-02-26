import styles from "./Features.module.css";

// Props

interface Props {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Features({
  title,
  description,
  className,
  children,
}: Props) {
  return (
    <section className={styles["features"]}>
      <h2 className={styles["section__title"]}>{title}</h2>

      <p className={styles["section__description"]}>{description}</p>

      <div className={`${styles["features__grid"]} ${className}`}>
        {/* Cards */}

        {children}
        {/* Cards */}
      </div>
    </section>
  );
}
