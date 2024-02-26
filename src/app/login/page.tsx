"use client"
import MainLayout from "@/components/UiComponents/MainLayout/MainLayout"
import styles from "./login.module.css"
import Button from "@/components/Button/Button"
import Spacer from "@/components/UiComponents/Spacer/Spacer"
import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { log } from "console"


function Login() {

    const [values, setvalues] = useState<{ email: string, password: string }>({
        email: "",
        password: ""
    })
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    const supbase = createClientComponentClient()

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supbase.auth.getUser()
            setUser(user)
            setLoading(false)
        }
        getUser()
    }, [])

    const router = useRouter()

    async function handleSignUp() {
        await supbase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        router.refresh()
        setEmail("")
        setPassword("")
    }

    async function handleSignIn() {
        await supbase.auth.signInWithPassword({
            email: email,
            password: password,
            options: {
            }
        })
        router.refresh()
        setEmail("")
        setPassword("")
    }


    async function handleSignOut() {
        await supbase.auth.signOut()
        router.refresh
    }

    console.log(user);



    // function submithandler(e: { preventDefault: () => void }) {
    //     e.preventDefault()
    //     setvalues({
    //         email: email,
    //         password: password
    //     })
    //     console.log(values);
    //     setEmail("")
    //     setPassword("")

    // }

    function handleEmail(e: { target: { value: any } }) {
        const emailInput = e.target.value
        setEmail(emailInput)


    }
    function handlePassword(e: { target: { value: any } }) {
        const passwordInput = e.target.value
        setPassword(passwordInput)
    }


    if (user) {
        return (
            <main>
                <div>
                    <h1>Welcome{user}</h1>
                    <Button
                        link={false}
                        text={"Sign in"}
                        disabled={false}
                        theme="button__purple"
                        size="button__medium"
                        variant="button__primary"
                        // type="submit"
                        onClick={handleSignOut}
                    ></Button>
                </div>
            </main>
        )
    }




    return (
        <MainLayout>
            <div className={styles["main__section"]}>
                <section className={styles["heading"]}>
                    <h2 className={styles["main__title"]}>Sign in to your account</h2>
                </section>
                <div>

                    <h2>{values.email}</h2>
                    <h2>{values.password}</h2>
                </div>
                <Spacer space={6} />
                <section className={styles["form__section"]}>
                    <form

                        className={styles["form"]}
                    // onSubmit={submithandler}
                    >
                        <label
                            className={styles["email__label"]}
                            htmlFor="email">

                            <span
                                className={styles["email__input__title"]}>
                                Email Address
                            </span>

                            <input
                                id="email"
                                className={styles["email__input"]}
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleEmail}
                            />

                        </label>
                        <label
                            className={styles["password__label"]}
                            htmlFor="password">

                            <span
                                className={styles["password__input__title"]}>
                                Password
                            </span>

                            <input
                                id="password"
                                className={styles["password__input"]}
                                type="password"
                                name="password"
                                value={password}
                                onChange={handlePassword}
                            />
                        </label>

                        {/* Button Component with 
            Primary-Medium-Purple Varints */}
                        <Button
                            link={false}
                            text={"Sign in"}
                            disabled={false}
                            theme="button__purple"
                            size="button__medium"
                            variant="button__primary"
                            // type="submit"
                            onClick={handleSignIn}
                        ></Button>
                        <br />
                        <Button
                            link={false}
                            text={"Sign up"}
                            disabled={false}
                            theme="button__purple"
                            size="button__medium"
                            variant="button__primary"
                            onClick={handleSignUp}

                        // type="submit"
                        ></Button>
                        {/* Button Component with 
            Primary-Medium-Purple Varints */}              </form>
                </section>
            </div>
            {/* <pre>{JSON.stringify(notes, null, 2)}</pre> */}

        </MainLayout>
    )
}

export default Login