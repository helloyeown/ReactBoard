import { Link } from "react-router-dom";

const SampleNav = () => {
	return (  
		<div className="flex m-3 p-4 text-white font-extrabold">
			<div className="m-4 text-4xl hover:underline">
				<Link to={"/"}>Main</Link>
			</div>
			<div className="m-4 text-4xl hover:underline">
				<Link to={"/about"}>About</Link>
			</div>
			<div className="m-4 text-4xl hover:underline">
				<Link to={"/products/list"}>Products</Link>
			</div>
			<div className="m-4 text-4xl hover:underline">
				<Link to={"/board/list"}>Board</Link>
			</div>
		</div>
	);
}
 
export default SampleNav;