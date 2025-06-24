import { Link } from "react-router"
import SearchIcon from "../../components/SearchIcon"
import LoginModal from "../../components/Login.modal"

interface HeaderProps {
    isLoggedin: boolean
}

function Header({ isLoggedin }: HeaderProps) {
    return (
        <header className="flex-col bg-blue-400 text-black">
            <div className="navbar pt-0 pb-0">
                <h1 className="flex-1">
                    <Link to="/" className="text-3xl cursor-pointer">Cata</Link>
                </h1>
                <div className="flex gap-2">
                    <label className="input m-auto">
                        <SearchIcon />
                        <input type="search" required placeholder="Search" />
                    </label>
                    {isLoggedin ?
                        <div className="tooltip tooltip-info tooltip-bottom" data-tip="Settings">
                            <button className="btn tooltip text-lg cursor-pointer">
                                ⚙️
                            </button>
                        </div>
                        : <>
                            <LoginModal />
                            <button>
                                Sign Up
                            </button>
                        </>
                    }

                </div>
            </div>
            <nav className="navbar bg-blue-200 pt-0 pb-0">
                <ul className="menu-horizontal">
                    <li>
                        comics
                    </li>

                </ul>

            </nav>
        </header>
    )
}
export default Header