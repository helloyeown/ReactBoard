import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

const ListSearchComponent = ({queryObj, moveSearch}) => {

	console.log("SearchComponent--------------")
	
	const [searchObj, setSearchObj] = useState({type:'', keyword:''})
	
	useEffect(() => {

		searchObj.type = queryObj.type || ''
		searchObj.keyword = queryObj.keyword || ''

		setSearchObj({...searchObj})

	}, [queryObj])

	return (  
		<div className="m-4 p-4">
			<select className="border m-2 p-2" 
			value={searchObj.type}
			onChange={e => {
				searchObj.type = e.target.value
				setSearchObj({...searchObj})
			}}>
				<option value={''}>선택해주세요.</option>
				<option value={'t'}>제목</option>
				<option value={'c'}>내용</option>
				<option value={'w'}>작성자</option>
				<option value={'tc'}>제목+내용</option>
				<option value={'tcw'}>제목+내용+작성자</option>
			</select>

			<input type="text"
			className="border m-2 p-2"
			value={searchObj.keyword}
			onChange={e => {
				searchObj.keyword = e.target.value
				setSearchObj({...searchObj})
			}}></input>

			<button className="p-2 m-2 border text-white font-bold bg-[#fdd000] hover:bg-[#ffe056] transition-all"
			onClick={e => moveSearch(searchObj.type, searchObj.keyword)}
			>SEARCH</button>

		</div>
	);
}
 
export default ListSearchComponent;