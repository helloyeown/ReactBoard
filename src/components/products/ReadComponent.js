import { useEffect, useState } from "react";
import { getProduct } from "../../api/productsAPI";

const initState = {
	pno:0,
	pname:'',
	pdesc:'',
	price:0,
	images:[]
}

	const ReadComponent = ({pno, moveModify, moveList}) => {

		const [product, setProduct] = useState(initState)

		useEffect(() => {
			getProduct(pno).then(data => {
				setProduct(data)
			}).catch(e => {
				console.log(e)
				moveList()
			})
		}, [pno])


		return (  
			<div className="m-2 p-2">
			<div className="m-2 p-2 border-2">
				{product.pname}
			</div>
			<div className="m-2 p-2 border-2">
				{product.pdesc}
			</div>
			<div className="m-2 p-2 border-2">
				{product.price}
			</div>
			<div className="m-2 p-2 border-2">
				<ul className="list-none">
					{product.images.map((fname, idx) => 
					<li key={idx}>
						<img src={`http://localhost/${fname}`}/>
					</li>)}
				</ul>
			</div>
			<div>
				<button className="bg-[#fdd000] border-2 m-2 p-2 text-white font-bold"
				onClick={() => moveModify(product.pno)}>MODIFY</button>
				<button className="bg-[#2b2b2a] border-2 m-2 p-2 text-white font-bold"
				onClick={moveList}>LIST</button>
			</div>
		</div>
		);
	}

export default ReadComponent