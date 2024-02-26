//Imports
import styles from "./StockBadge.module.css";
import CheckIconSvg from "../SvgIcons/CheckIconSvg";
import ErrorIconSvg from "../SvgIcons/ErrorIconSvg";

// const stock = true
// const stock = true

interface Props {
  stock: boolean;
}

function StockBadge({ stock }: Props) {
  const stockAvilabilty = stock ? "In stock" : "Out of stock";

  return (
    <span
      className={`
        ${styles["stock__badge"]}
        
        ${styles[stock ? "instock" : "outofstock"]}
         
         `}
    >
      {stock ? <CheckIconSvg /> : <ErrorIconSvg />}
      {stockAvilabilty}
    </span>
  );
}

export default StockBadge;
