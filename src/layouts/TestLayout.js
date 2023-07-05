import { Link } from "react-router-dom";

const TestLayout = ({children}) => {
	return (  
		<div>
			<div>
				<h2><Link to={"/"}>Main</Link></h2>
				<h2><Link to={"/about"}>About</Link></h2>
			</div>
			<div>
				{children}
			</div>
		</div>
	);
}
 
export default TestLayout;