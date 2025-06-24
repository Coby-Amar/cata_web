import { useLogin, type LoginData } from "../api/auth.api"
import { useForm } from "../hooks/form.hooks"

function LoginModal() {
    const { mutate: login } = useLogin()
    const { onSubmit } = useForm(['username', 'password'], (data: LoginData) => login(data))
    return (
        <>
            <button
                className="btn m-auto"
                onClick={() => (document.getElementById('login_modal') as HTMLFormElement).showModal()}
            >
                Login
            </button>
            <dialog id="login_modal" className="modal modal-middle">
                <div className="modal-box">
                    <div className="hero bg-base-200 min-w-full ">
                        <div className="hero-content flex-col">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Login now</h1>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <form className="card-body" onSubmit={onSubmit}>
                                    <fieldset className="fieldset">
                                        <label className="label">Username</label>
                                        <input
                                            type="email"
                                            name="username"
                                            className="input"
                                            placeholder="Username"
                                        />
                                        <label className="label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="input"
                                            placeholder="Password"
                                        />
                                        <div><a className="link link-hover">Forgot password?</a></div>
                                        <button className="btn btn-neutral mt-4" type="submit">Login</button>
                                    </fieldset>
                                    <div>
                                        <a className="link link-hover">
                                            Already have an account?
                                            {/* Todo - connect to register */}
                                            Sign up
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog >

        </>
    )
}

export default LoginModal