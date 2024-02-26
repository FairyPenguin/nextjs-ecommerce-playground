import styles from "./FooterList.module.css";

interface Props {
  title: string;
  children: React.ReactElement<HTMLLIElement>;
}

export default function FooterList({ title, children }: Props) {
  return (
    <div className={styles["footer__list"]}>
      <h4 className={styles["footer__list__title"]}>{title}</h4>
      <ul>{children}</ul>
    </div>
  );
}
