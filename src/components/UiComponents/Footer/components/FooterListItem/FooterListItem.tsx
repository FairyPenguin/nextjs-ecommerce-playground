import styles from "./FooterListItem.module.css";

interface Props {
  title: string;
  url: string;
}

export default function FooterListItem({ url, title }: Props) {
  return (
    <li className={styles["list__item"]}>
      <a href={url}>{title}</a>
    </li>
  );
}
