import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
	return (  
		<BasicLayout>
			<div className="mt-4 p-4 bg-[#2b2b2a] text-white text-2xl flex justify-center">
				<div className="font-extrabold m-2 p-2 hover:underline">List</div>
				<div className="font-extrabold m-2 p-2 hover:underline">Register</div>
			</div>
			<div className="h-[50vh] bg-white w-full pt-2 h-auto border">
				<Outlet></Outlet>
			</div>
		</BasicLayout>
	);
}
 
export default IndexPage;