import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import { openLogin, openRegister } from "./features/modal/modalSlice";
import "./App.css";

function App() {
	// call action
	const dispatch = useDispatch();

	// read state
	const { isLoginOpen, isRegisterOpen } = useSelector((store) => store.modal);

	function clickLogin() {
		dispatch(openLogin({ open: true }));
	}

	function clickRegister() {
		dispatch(openRegister({ open: true }));
	}

	return (
		<>
			<header>
				<div className="logo">Welcome</div>
				<div className="user">
					<button onClick={() => clickLogin()}>Login</button>
					<button onClick={() => clickRegister()}>Register</button>
				</div>
			</header>
			<LoginModal open={isLoginOpen} />
			<RegisterModal open={isRegisterOpen} />
		</>
	);
}

export default App;
