import { Link } from "react-router"

export function Login() {

	function buttonHandler(type) {
		localStorage.setItem("isLogin", type)
		location.reload()
	}

	return (
		<>
			<main className="main-content-login">
				<figure className="main-content-login__logo-holder">
					<img src="/logo.svg" alt="newsify logo" className="main-content-login__logo"></img>
					<span className="main-content-login__logo-name">Newsify</span>
				</figure>

				<p className="main-content-login__title">Welcome! Let's dive into your account!</p>

				<button className="main-content-login__button main-content-login__button-facebook" onClick={() => buttonHandler("Facebook")}>Continue with Facebook</button>
				<button className="main-content-login__button main-content-login__button-google" onClick={() => buttonHandler("Google")}>Continue with Google</button>

				<p className="main-content-login__line-breaker"><span></span><span>or</span><span></span></p>

				<button className="main-content-login__button main-content-login__button-user" onClick={() => buttonHandler("User")}>Sign in with password</button>

				<p className="main-content-login__sign-up">Don't have an account? <Link to={"/"}>Sign up</Link></p>
			</main>
		</>
	)
}

export default Login