import Image from "next/image"
import styles from "./CategoryWithBkgImages.module.css"

export default function CategoryWithBkgImages() {
    return (
        <section>
            <div>
                <h2>Shop by Category</h2>
                <button>
                    <a href="">

                    </a>
                </button>
            </div>

            <div className={styles["grid__container"]}>

                <div className={`${styles["category"]} ${styles["left__side"]}`}>
                    <Image
                        src="/images/category-page-02-image-card-02.jpg"
                        width={1280}
                        height={1648}
                        alt="altk"
                    />

                    <div className={styles["flex__container"]}>
                        <h3>New Arrivals</h3>
                        <a href="">
                            Shop Now
                        </a>
                    </div>
                </div>
                {/*  */}

                <div className={`${styles["category"]} ${styles["right__side"]}`}>
                    <Image
                        src="/images/category-page-02-image-card-01.jpg"
                        width={1280}
                        height={1648}
                        alt="altk"
                    />

                    <div className={styles["flex__container"]}>
                        <h3>New Arrivals</h3>
                        <a href="">
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className={`${styles["category"]} ${styles["right__side"]}`}>
                    <Image
                        src="/images/category-page-02-image-card-01.jpg"
                        width={1280}
                        height={1648}
                        alt="altk"
                    />

                    <div className={styles["flex__container"]}>
                        <h3>New Arrivals</h3>
                        <a href="">
                            Shop Now
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
