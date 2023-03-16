import { Link } from "react-router-dom";

const Products = () => {
	const DUMMY_PRODUCTS = [
		{ id: "p1", title: "product1" },
		{ id: "p2", title: "product 2" },
		{ id: "p3", title: "product 2" },
	];
	return (
		<div>
			<h1> the product page</h1>
			<ul>
				{" "}
				{DUMMY_PRODUCTS.map((prod) => (
					<li key={prod.id}>
						<Link to={`/products/${prod.id}`}> {prod.title}</Link>{" "}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Products;
