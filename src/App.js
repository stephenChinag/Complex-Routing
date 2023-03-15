import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";

const routing = createBrowserRouter([
	{ path: "/", element: <Homepage /> },

	{ path: "/products", element: <Products /> },
]);

function App() {
	return (
		<Fragment>
			<RouterProvider router={routing} />
		</Fragment>
	);
}

export default App;
