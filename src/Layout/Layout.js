import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const Layout = (props) => {
	return (
		<main>
			<MainNavigation />
			<Outlet />
		</main>
	);
};

export default Layout;
