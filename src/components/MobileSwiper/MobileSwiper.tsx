import styles from "./MobileSwiper.module.css"

const sliderArray = [
    {
        url: "https://i.postimg.cc/t7QKtvBP/s1.jpg",
        alt: "Image-1",
        index: 0
    },
    {
        url: "https://i.postimg.cc/2jb3GqH8/s2.jpg",
        alt: "Image-2",
        index: 1
    },
    {
        url: "https://i.postimg.cc/c4fCqpyp/s3.jpg",
        alt: "Image-3",
        index: 2
    },
    {
        url: "https://i.postimg.cc/Y250spVN/s4.jpg",
        alt: "Image-4",
        index: 3
    },
    {
        url: "https://i.postimg.cc/t7QKtvBP/s1.jpg",
        alt: "Image-1",
        index: 0
    },
    {
        url: "https://i.postimg.cc/2jb3GqH8/s2.jpg",
        alt: "Image-2",
        index: 1
    },
    {
        url: "https://i.postimg.cc/c4fCqpyp/s3.jpg",
        alt: "Image-3",
        index: 2
    },
    {
        url: "https://i.postimg.cc/Y250spVN/s4.jpg",
        alt: "Image-4",
        index: 3
    },
];

function MobileSwiper() {
    return (
        <section className={styles["container"]}>
            <div className={styles["slider__wrapper"]}>
                <div className={styles["slider"]}>
                    {
                        sliderArray.map((slide, index) => {
                            return (
                                <img
                                    key={index}
                                    src={slide.url}
                                    alt="altk" />
                            )
                        })

                    }

                </div>
            </div>
        </section>
    )
}

export default MobileSwiper