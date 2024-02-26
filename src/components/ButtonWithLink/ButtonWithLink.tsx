import { MouseEventHandler } from "react";
import styles from "./ButtonWithLink.module.css";

// Button with Link Props Interface
interface Props {
  text: string | React.ReactNode;
  disabled: boolean;
  urlString?: string;
  children?: React.ReactNode | false;
  // Defined Styles Classnames
  theme: "button__blue" | "button__purple" | "button__prurple__nobackground";
  size?: "button__small" | "button__medium" | "button__large";
  variant?: "button__primary" | "button__rounded" | "button__text";
  compound?: "button__medium__rounded";
  textUnderline?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function ButtonWithLink({
  children,
  text,
  disabled,
  variant,
  size,
  urlString,
  theme,
  textUnderline,
  compound,
  style,
  className,
  onClick
}: Props) {
  // Class Names Props Variable
  const classNamesProp = `
  ${styles["button__base__link"]} 
  ${styles[`${variant}`]}
  ${styles[`${size}`]}
  ${styles[theme]}
  ${styles[`${compound}`]}
  ${styles[`${textUnderline ? "button__underlined" : ""}`]}
  `;

  return (
    <button
      onClick={onClick}
      className={`${styles["button__base"]}`} type="button" disabled={disabled}>
      <a

        className={`${classNamesProp}`}
        style={style}
        href={urlString}
      >
        {children}

        {text}
      </a>
    </button>
  );
}

export default ButtonWithLink;
