import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

const routing = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Homepage /> },
			{ path: "/products", element: <Products /> },
			{ path: "/products/:productId", element: <ProductDetails /> },
		],
	},
]);

function App() {
	return <RouterProvider router={routing} />;
}

export default App;
