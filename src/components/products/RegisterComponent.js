import { useRef, useState } from "react"
import { postProduct } from "../../api/productsAPI"

const initState = {
	pname: 'Ice Coffee',
	pdesc: 'Coffee......',
	price: 4000
}

const RegisterComponent = ({moveList}) => {

	const fileRef = useRef()	// 참조값 물기
	const [product, setProduct] = useState({...initState})

	const handleChange = (e) => {
		product[e.target.name] = e.target.value
		setProduct({...product})	// 제목, 내용, 작성자는 처리됨
	}

	const handleClickSave = (e) => {
		const formData = new FormData()

		formData.append("pname", product.pname)
		formData.append("pdesc", product.pdesc)
		formData.append("price", product.price)

		console.dir(fileRef.current)

		const arr = fileRef.current.files

		for(let file of arr){
			formData.append("files", file)
		}

		postProduct(formData).then(data => {
			const rno = data.result
			alert(`${rno}번 상품이 등록되었습니다.`)
			moveList()
		})
	}

	const handleClickClear = (e) => {
		fileRef.current.value = ''
	}


	return (  
		<div className="m-2 p-2">
			<div className="m-2 p-2 border-2">
				<input type="text" name="pname" value={product.pname} onChange={handleChange}></input>
			</div>
			<div className="m-2 p-2 border-2">
				<input type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
			</div>
			<div className="m-2 p-2 border-2">
				<input type="number" name="price" value={product.price} onChange={handleChange}></input>
			</div>
			<div className="m-2 p-2 border-2">
				<input type="file" ref={fileRef} multiple name="images" onChange={handleChange}></input>
			</div>
			<div className="m-2 p-2 border-2">
				<button onClick={handleClickSave}>SAVE</button>
				<button onClick={handleClickClear}>CLEAR FILES</button>
			</div>
		</div>
	);
}
 
export default RegisterComponent;