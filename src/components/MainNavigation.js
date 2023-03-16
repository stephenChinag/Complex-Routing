import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
const MainNavigation = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.list}>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? styles.active : "")}
							end
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? styles.active : "")}
							to="/products"
						>
							{" "}
							Product{" "}
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
