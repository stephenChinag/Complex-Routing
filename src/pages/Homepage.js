import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
	const navigate = useNavigate();

	const navigationHandler = () => {
		navigate("/products");
	};

	return (
		<div>
			<h2>My HomePage</h2>
			<p>
				Go to <Link to="/products"> the list of products</Link>
			</p>
			<button onClick={navigationHandler}> Navigat</button>
		</div>
	);
};

export default Homepage;
