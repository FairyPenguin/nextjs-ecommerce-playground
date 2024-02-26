import { ButtonHTMLAttributes, DOMAttributes, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLElement> {
  link?: boolean;
  text: string | React.ReactNode;
  disabled: boolean;
  urlString?: string;
  children?: React.ReactNode | false;
  // Defined Styles Classnames
  theme: "button__blue" | "button__purple" | "button__prurple__nobackground" | "button__red__nobackground";
  size?: "button__small" | "button__medium" | "button__large";
  variant?: "button__primary" | "button__rounded" | "button__text";
  compound?: "button__medium__rounded";
  textUnderline?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement> 
  type?: "submit" | "button" | "reset"

  //end of types
  /**
   * 
   * 
   */
}


function Button({
  children,
  text,
  disabled,
  variant,
  size,
  link,
  urlString,
  theme,
  textUnderline,
  compound,
  className,
  onClick,
  type,
  style }: Props) {
  return (
    <button
      // type="button"
      onClick={onClick}
      type={type}
      className={`
    ${styles["button__base"]} 
    ${styles[`${variant}`]}
    ${styles[`${size}`]}
    ${styles[theme]}
    ${styles[`${compound}`]}
    ${styles[`${textUnderline ? "button__underlined" : ""}`]}
    `}
      style={style}
      disabled={disabled}
    >
      {children}

      <span

      // className={styles["btn__text"]}
      >
        {link ? (
          <a className={className} href={urlString}>
            {text}
          </a>
        ) : (
          <>{text}</>
        )}
      </span>
    </button>
  );
}

export default Button;
