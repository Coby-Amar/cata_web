import { Link, NavLink } from "react-router"
import SearchIcon from "../../components/SearchIcon"
import LoginSignupModal from "../../components/Login_Signup.modal"
import { useLogout } from "../../api/auth.api"

interface HeaderProps {
    isLoggedin: boolean
}

function Header({ isLoggedin }: HeaderProps) {
    const { mutate: logout } = useLogout()
    return (
        <header className="flex-col bg-primary text-black">
            <div className="navbar pt-0 pb-0">
                <h1 className="flex-1">
                    <Link to="/" className="text-3xl cursor-pointer">Cata</Link>
                </h1>
                <div className="flex gap-5">
                    <label className="input w-full">
                        <SearchIcon />
                        <input type="search" required placeholder="Search" />
                    </label>
                    {isLoggedin ?
                        <div className="dropdown dropdown-end max-w-full min-w-fit text-white">
                            <button tabIndex={0} role="button" className="btn btn-ghost w-fit">👤 Account</button>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-100 rounded-box z-1 shadow">
                                <li>
                                    <NavLink to="/settings">
                                        ⚙️ <span>Settings</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-error" to="/" onClick={() => logout()}>
                                        🚪 <span>Logout</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        :
                        <LoginSignupModal />
                    }

                </div>
            </div>
            <nav className="navbar bg-secondary pt-0 pb-0">
                <ul className="menu menu-horizontal">
                    <li>
                        <NavLink to="/comics" className="link link-neutral ">
                            Comics
                        </NavLink>
                    </li>

                </ul>

            </nav>
        </header>
    )
}
export default Header