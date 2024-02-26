import { useState } from "react"
import styles from "./Varinats.module.css"
import VariantsData from "@/Data/variantswithquantity.json"

function Variants() {

    const [value, setValue] = useState("")

    return (
        <div className={styles["variants__container"]}>

            <div className={styles["colors__varinat"]}>
                <label htmlFor="color">
                    <span>Color:{value}</span>
                    {/* <span>Red</span> */}
                    <input
                        // onChange={""}
                        value="red"
                        name="color"
                        id="color"
                        type="radio" />
                </label>
            </div>

            {VariantsData.variant_options.map((variant, index) => {
                return (<div key={index}>
                    <h1>{variant.name}</h1>
                </div>)

            })}
        </div>
    )
}

export default Variants