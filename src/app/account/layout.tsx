import MainLayout from "@/components/UiComponents/MainLayout/MainLayout"
import styles from "./layout.module.css"
export default function AccountLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <MainLayout>
            {/* Include shared UI here e.g. a header or sidebar */}
            <section className={styles["main"]}>

                <aside>
                    <div className={styles["container"]}>
                        <h1>SideBar Menu</h1>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul></div>
                </aside>

                <section>
                    {children}
                </section>
            </section>



        </MainLayout>
    )
}