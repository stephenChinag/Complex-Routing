import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
	const prams = useParams();

	return (
		<div>
			<h1> Product DETAILS</h1>
			<h1>{prams.productId} </h1>
			<Link to="..">Back </Link>
		</div>
	);
};
export default ProductDetails;
