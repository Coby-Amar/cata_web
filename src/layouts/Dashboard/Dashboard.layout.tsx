import { Outlet, useLoaderData } from "react-router"
import { useEffect } from "react"

import authStore, { type AuthStateUser } from "../../stores/auth.store"
import Header from "./Header"

function DashboardLayout() {
    const isLoggedin = authStore((state) => state.isLoggedin)
    const login = authStore((state) => state.login)
    const user = useLoaderData() as AuthStateUser | null;

    useEffect(() => {
        if (user) {
            login(user);
        }
    }, [user, login]);
    return (
        <div className="bg-amber-50 text-black">
            <Header isLoggedin={isLoggedin} />
            <main className="w-full min-h-[80dvh]">
                <Outlet />
            </main>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                Footer
            </footer>
        </div>
    )
}

export default DashboardLayout