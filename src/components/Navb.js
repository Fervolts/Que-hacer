import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navb.css";

function Navb() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Quehaceres!</h3>
			<nav ref={navRef}>
				<a href="/Quehacer">Añade a la lista!</a>
				<a href="/">Lista!</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navb;
