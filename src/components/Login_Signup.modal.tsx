import { useState } from "react"
import { useLogin, type LoginData } from "../api/auth.api"
import { useForm } from "../hooks/form.hooks"

function LoginSignupModal() {
    const [isLogin, setIsLogin] = useState(true)
    const { mutate: login } = useLogin()
    const { onSubmit } = useForm(['username', 'password'], (data: LoginData) => login(data))
    return (
        <>
            <div className="tooltip tooltip-info tooltip-bottom min-w-fit max-w-full" data-tip="Login/Sign up">
                <button
                    className="btn"
                    onClick={() => (document.getElementById('login_modal') as HTMLFormElement).showModal()}
                >
                    Login/Sign up
                </button>
            </div>
            <dialog id="login_modal" className="modal modal-middle">
                <div className="modal-box bg-primary ">
                    <form className="card-body" onSubmit={onSubmit}>
                        <fieldset className="fieldset text-primary-content">
                            <legend className="fieldset-legend text-primary-content text-4xl">{isLogin ? 'Login' : 'Sign up'} now</legend>
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
                            {isLogin ?
                                <>
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4" type="submit">{'LOGIN'}</button>
                                </> :
                                <>
                                    <button className="btn btn-neutral mt-4" type="submit">{'Sign up'}</button>
                                </>
                            }
                        </fieldset>
                        <div>
                            <button className="cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ?
                                    <>
                                        Don't have an account? Sign up
                                    </> :
                                    <>
                                        Already have an account? Login
                                    </>
                                }
                            </button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog >

        </>
    )
}

export default LoginSignupModal