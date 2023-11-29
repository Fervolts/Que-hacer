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
			<h3>QueHaceres</h3>
			<nav ref={navRef}>
				<a href="/">Inicio</a>
				<a href="/agregartasks">Añadir Tareas</a>
				<a href="/listas">Lista de tareas</a>
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
